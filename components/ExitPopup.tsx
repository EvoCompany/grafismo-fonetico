"use client";
import { useEffect, useRef, useState } from "react";

const TRAP = { exitTrap: true };

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [seconds, setSeconds] = useState(599);
  const shown = useRef(false);

  const show = () => {
    if (shown.current || dismissed) return;
    shown.current = true;
    setVisible(true);
  };

  useEffect(() => {
    // Desktop: mouse sai pelo topo da janela (exit intent)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) show();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    // Back-button trap: push estado com marcador próprio.
    // O popstate só dispara o popup quando e.state.exitTrap === true,
    // ou seja, quando o usuário navega DE VOLTA para o nosso estado falso.
    // Cliques em links #hash empurram um novo estado (state=null) para frente
    // na história — o popstate resultante teria e.state=null e é ignorado.
    const baseUrl = window.location.href.split("#")[0];
    history.pushState(TRAP, "", baseUrl);

    const onPopState = (e: PopStateEvent) => {
      if (e.state?.exitTrap) {
        show();
        history.pushState(TRAP, "", baseUrl);
      }
    };
    window.addEventListener("popstate", onPopState);

    // Mobile: troca de app / minimiza navegador
    const onVisibility = () => {
      if (document.visibilityState === "hidden") show();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [dismissed]);

  // Contagem regressiva
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  if (!visible) return null;

  return (
    <div className="exit-overlay" onClick={dismiss}>
      <div className="exit-popup" onClick={(e) => e.stopPropagation()}>

        <button className="exit-close" onClick={dismiss} aria-label="Fechar">✕</button>

        <div className="exit-badge">⚡ OFERTA RELÂMPAGO EXCLUSIVA</div>

        <h2 className="exit-titulo">
          Espera! Antes de ir embora...
        </h2>
        <p className="exit-sub">
          Porque você ainda está em dúvida, preparamos uma oferta que
          <strong> não aparece em nenhum outro lugar.</strong>
        </p>

        <div className="exit-timer-wrap">
          <span className="exit-timer-label">⏳ Essa oferta expira em:</span>
          <div className="exit-timer">
            <span>{mins}</span>:<span>{secs}</span>
          </div>
        </div>

        <div className="exit-produto">
          <div className="exit-produto-titulo">🎁 Kit Completo Educakids360</div>
          <ul className="exit-itens">
            <li>✅ Atividades de Grafismo Fonético Nível 1, 2 e 3</li>
            <li>✅ <strong>Bônus 01:</strong> Caderno do Alfabeto com Imagens</li>
            <li>✅ <strong>Bônus 02:</strong> Caderno Quebra-Cabeça do Alfabeto</li>
            <li>✅ <strong>Bônus 03:</strong> Caderno de Formação de Palavras</li>
            <li>✅ <strong>Bônus 04:</strong> Caderno Relógio do Alfabeto</li>
            <li>✅ <strong>Bônus 05:</strong> Caderno de Pontilhado do Alfabeto</li>
            <li>✅ <strong>Bônus 06:</strong> Caderno Carinhas do Alfabeto</li>
          </ul>
        </div>

        <div className="exit-preco-wrap">
          <span className="exit-preco-de">De R$ 37,90</span>
          <div className="exit-preco-por">R$ 19,90</div>
          <span className="exit-preco-parcel">ou 2× de R$ 9,95 sem juros</span>
        </div>

        {/* TODO: trocar pelo link Cakto com preço de R$19,90 */}
        <a
          href="https://pay.cakto.com.br/9sw8c9t_794481"
          className="btn-cta exit-btn"
        >
          🔥 SIM! QUERO GARANTIR POR R$19,90 AGORA
        </a>

        <button className="exit-recusar" onClick={dismiss}>
          Não obrigado, prefiro pagar mais caro depois
        </button>

        <p className="exit-seguranca">🔒 Compra 100% segura · Acesso imediato · Garantia de 7 dias</p>
      </div>
    </div>
  );
}
