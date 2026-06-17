"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const key = "gf_deadline";
    let deadline = localStorage.getItem(key);
    if (!deadline) {
      deadline = String(Date.now() + 24 * 60 * 60 * 1000);
      localStorage.setItem(key, deadline);
    }

    const update = () => {
      const diff = parseInt(deadline!) - Date.now();
      if (diff <= 0) {
        setVisible(false);
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="countdown-wrap">
      <div className="countdown-item">
        <span className="countdown-num">{time.h}</span>
        <span className="countdown-label">horas</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-num">{time.m}</span>
        <span className="countdown-label">minutos</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-num">{time.s}</span>
        <span className="countdown-label">segundos</span>
      </div>
    </div>
  );
}
