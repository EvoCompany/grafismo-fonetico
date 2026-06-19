"use client";

import { useEffect, useState } from "react";

type State = "loading" | "counting" | "expired";

export default function Countdown() {
  const [state, setState] = useState<State>("loading");
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });

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
        setState("expired");
        return;
      }
      setState("counting");
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

  if (state === "loading") return null;

  if (state === "expired") {
    return (
      <div className="countdown-expired">
        <p className="countdown-expired-titulo">⚠️ Oferta encerrada</p>
        <p className="countdown-expired-sub">
          O preço promocional expirou. O valor voltou para{" "}
          <strong>R$&nbsp;47,90</strong> — mas você ainda pode garantir o acesso
          agora antes que suba novamente.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="countdown-intro">⏳ Oferta expira em:</p>
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
    </>
  );
}
