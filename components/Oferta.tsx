import Countdown from "./Countdown";

export default function Oferta() {
  return (
    <section className="section" id="oferta">
      <div className="container">
        <div className="oferta-box">
          <span className="tag" style={{ background: "rgba(255,255,255,0.2)" }}>
            🔥 Oferta Especial
          </span>
          <h2
            className="titulo"
            style={{
              color: "white",
              fontSize: "clamp(24px,4vw,38px)",
              marginBottom: "8px",
            }}
          >
            Kit Grafismo Fonético V2
            <br />+ 6 Bônus Exclusivos
          </h2>

          <Countdown />

          <div className="oferta-de">De R$ 453,00 (valor total)</div>
          <div className="oferta-por">R$ 37,90</div>
          <div className="oferta-parcel">ou 5× de R$ 8,39 sem juros</div>

          <div className="oferta-incluso">
            <span className="oferta-tag">✅ Kit Grafismo Fonético V2</span>
            <span className="oferta-tag">🎁 6 Cadernos Bônus</span>
            <span className="oferta-tag">📲 Acesso Imediato</span>
            <span className="oferta-tag">♾️ Vitalício</span>
            <span className="oferta-tag">🖨️ Imprima quando quiser</span>
          </div>

          <a
            href="https://pay.cakto.com.br/SEU_LINK_AQUI"
            className="btn-cta"
            style={{ fontSize: "clamp(17px,3vw,22px)", padding: "20px 48px" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            QUERO GARANTIR MEU KIT AGORA!
          </a>
          <p className="cta-abaixo" style={{ color: "rgba(255,255,255,0.7)", marginTop: "14px" }}>
            🔒 Pagamento 100% seguro • Cartão, PIX ou boleto
          </p>

          <div className="garantia-strip">
            <span className="garantia-icon">🛡️</span>
            <span>
              <strong>Garantia de 7 dias:</strong> Se não gostar, devolvemos
              100% do seu dinheiro. Sem perguntas, sem burocracia.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
