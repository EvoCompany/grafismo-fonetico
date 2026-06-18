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
              fontSize: "clamp(22px,4vw,36px)",
              marginBottom: "4px",
            }}
          >
            Escolha seu Kit Educakids360
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px", marginBottom: "8px" }}>
            Método Grafismo Fonético — Aprenda a ler de forma natural e eficaz
          </p>

          <Countdown />

          <div className="oferta-cards-grid">
            {/* Plano Básico */}
            <div className="oferta-card">
              <span className="oferta-card-tag">Kit Básico</span>
              <div className="oferta-de" style={{ marginTop: "14px" }}>De R$ 197,00</div>
              <div className="oferta-por">R$ 27,90</div>
              <div className="oferta-parcel">ou 4× de R$ 7,97 sem juros</div>
              <div className="oferta-incluso" style={{ marginBottom: "20px" }}>
                <span className="oferta-tag">✅ Kit Educakids360 Completo</span>
                <span className="oferta-tag">📲 Acesso Imediato</span>
                <span className="oferta-tag">♾️ Acesso Vitalício</span>
                <span className="oferta-tag">🖨️ Imprima quando quiser</span>
              </div>
              <a
                href="https://pay.cakto.com.br/5vkagcf"
                className="btn-cta"
                style={{ width: "100%", fontSize: "clamp(13px,2.5vw,16px)", padding: "15px 20px" }}
              >
                QUERO O KIT BÁSICO
              </a>
              <p className="cta-abaixo" style={{ color: "rgba(255,255,255,0.65)", marginTop: "10px", fontSize: "12px" }}>
                🔒 Pagamento 100% seguro
              </p>
            </div>

            {/* Plano Completo */}
            <div className="oferta-card oferta-card--destaque">
              <span className="oferta-card-tag oferta-card-tag--destaque">⭐ Mais Completo</span>
              <div className="oferta-de" style={{ marginTop: "14px" }}>De R$ 453,00 (valor total)</div>
              <div className="oferta-por">R$ 37,90</div>
              <div className="oferta-parcel">ou 5× de R$ 8,39 sem juros</div>
              <div className="oferta-incluso" style={{ marginBottom: "20px" }}>
                <span className="oferta-tag">✅ Kit Educakids360 Completo</span>
                <span className="oferta-tag">🎁 6 Cadernos Bônus</span>
                <span className="oferta-tag">📲 Acesso Imediato</span>
                <span className="oferta-tag">♾️ Acesso Vitalício</span>
                <span className="oferta-tag">🖨️ Imprima quando quiser</span>
              </div>
              <a
                href="https://pay.cakto.com.br/9sw8c9t_794481"
                className="btn-cta btn-cta--destaque"
                style={{ width: "100%", fontSize: "clamp(13px,2.5vw,16px)", padding: "15px 20px" }}
              >
                QUERO O KIT COMPLETO + BÔNUS!
              </a>
              <p className="cta-abaixo" style={{ color: "rgba(255,255,255,0.65)", marginTop: "10px", fontSize: "12px" }}>
                🔒 Cartão, PIX ou boleto
              </p>
            </div>
          </div>

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
