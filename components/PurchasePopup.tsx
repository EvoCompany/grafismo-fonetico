"use client";
import { useEffect, useRef, useState } from "react";

const COMPRAS = [
  { nome: "Juliana Flores",    produto: "Kit Completo Educakids360", cidade: "Joinville, SC",       min: 2 },
  { nome: "Mariana Costa",     produto: "Kit Básico Educakids360",   cidade: "São Paulo, SP",        min: 5 },
  { nome: "Fernanda Lima",     produto: "Kit Completo Educakids360", cidade: "Curitiba, PR",         min: 1 },
  { nome: "Ana Paula Souza",   produto: "Kit Completo Educakids360", cidade: "Belo Horizonte, MG",  min: 7 },
  { nome: "Camila Rocha",      produto: "Kit Básico Educakids360",   cidade: "Porto Alegre, RS",     min: 3 },
  { nome: "Renata Oliveira",   produto: "Kit Completo Educakids360", cidade: "Fortaleza, CE",        min: 6 },
  { nome: "Beatriz Santos",    produto: "Kit Básico Educakids360",   cidade: "Goiânia, GO",          min: 4 },
  { nome: "Larissa Mendes",    produto: "Kit Completo Educakids360", cidade: "Recife, PE",           min: 2 },
  { nome: "Patrícia Nunes",    produto: "Kit Completo Educakids360", cidade: "Manaus, AM",           min: 7 },
  { nome: "Viviane Cardoso",   produto: "Kit Básico Educakids360",   cidade: "Salvador, BA",         min: 5 },
  { nome: "Tatiana Alves",     produto: "Kit Completo Educakids360", cidade: "Brasília, DF",         min: 3 },
  { nome: "Simone Ferreira",   produto: "Kit Básico Educakids360",   cidade: "Campinas, SP",         min: 1 },
  { nome: "Priscila Duarte",   produto: "Kit Completo Educakids360", cidade: "Florianópolis, SC",    min: 4 },
  { nome: "Cláudia Ribeiro",   produto: "Kit Básico Educakids360",   cidade: "Natal, RN",            min: 6 },
  { nome: "Aline Teixeira",    produto: "Kit Completo Educakids360", cidade: "Maceió, AL",           min: 2 },
];

export default function PurchasePopup() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [topOffset, setTopOffset] = useState(16);
  const hasStarted = useRef(false);

  // Track urgency bar visibility to offset popup below it
  useEffect(() => {
    const bar = document.querySelector(".urgencia-bar") as HTMLElement | null;
    if (!bar) return;

    const update = () => {
      const rect = bar.getBoundingClientRect();
      const barVisible = rect.bottom > 0;
      setTopOffset(barVisible ? rect.bottom + 12 : 16);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      hasStarted.current = true;
      setVisible(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!hasStarted.current) return;
    let t: ReturnType<typeof setTimeout>;
    if (visible) {
      t = setTimeout(() => setVisible(false), 5000);
    } else {
      t = setTimeout(() => {
        setIdx((i) => (i + 1) % COMPRAS.length);
        setVisible(true);
      }, 9000 + Math.floor(Math.random() * 5000));
    }
    return () => clearTimeout(t);
  }, [visible]);

  const c = COMPRAS[idx];

  return (
    <div
      className={`purchase-popup${visible ? " purchase-popup--visible" : ""}`}
      style={{ top: `${topOffset}px` }}
    >
      <div className="purchase-popup-avatar">🛒</div>
      <div className="purchase-popup-body">
        <p className="purchase-popup-nome">{c.nome} comprou:</p>
        <p className="purchase-popup-produto">{c.produto}</p>
        <p className="purchase-popup-info">{c.cidade} • há {c.min} min</p>
      </div>
    </div>
  );
}
