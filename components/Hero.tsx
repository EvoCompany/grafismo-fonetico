export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="tag">✨ Educakids360 — Grafismo Fonético</span>

        <div className="hero-img-wrap">
          <svg
            viewBox="0 0 340 280"
            xmlns="http://www.w3.org/2000/svg"
            style={{ borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
          >
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#E3F2FD" }} />
                <stop offset="100%" style={{ stopColor: "#BBDEFB" }} />
              </linearGradient>
            </defs>
            <rect width="340" height="280" rx="16" fill="url(#g1)" />
            <line x1="30" y1="80" x2="310" y2="80" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="30" y1="110" x2="310" y2="110" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="30" y1="140" x2="310" y2="140" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="30" y1="170" x2="310" y2="170" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="30" y1="200" x2="310" y2="200" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="60" y1="20" x2="60" y2="260" stroke="#EF9A9A" strokeWidth="2" />
            <text x="80" y="75" fontFamily="Fredoka One, cursive" fontSize="38" fill="#1565C0" opacity="0.7">A a B b</text>
            <text x="80" y="108" fontFamily="Fredoka One, cursive" fontSize="38" fill="#1976D2" opacity="0.6">C c D d</text>
            <text x="80" y="141" fontFamily="Fredoka One, cursive" fontSize="38" fill="#1565C0" opacity="0.7">E e F f</text>
            <text x="80" y="174" fontFamily="Fredoka One, cursive" fontSize="38" fill="#1976D2" opacity="0.6">G g H h</text>
            <rect x="0" y="210" width="340" height="70" rx="0" fill="#1565C0" />
            <text x="170" y="240" fontFamily="Fredoka One, cursive" fontSize="18" fill="white" textAnchor="middle">Educakids360</text>
            <text x="170" y="262" fontFamily="Nunito, sans-serif" fontSize="12" fill="rgba(255,255,255,0.7)" textAnchor="middle">Método Grafismo Fonético • +100 Atividades</text>
            <text x="170" y="35" fontSize="28" textAnchor="middle" fill="#FFD54F">⭐⭐⭐⭐⭐</text>
          </svg>
        </div>

        <h1 className="hero-titulo">
          A técnica que ensina seu filho
          <br />a ler <em>até 5× mais rápido</em>,<br />
          sem pressão nem estresse!
        </h1>
        <p className="hero-sub">
          Funciona com apenas{" "}
          <strong style={{ color: "#FFD54F" }}>10 minutos por dia</strong> —
          para crianças de 2 a 12 anos
        </p>

        <div className="hero-badges">
          <span className="hero-badge-item">👧 2 a 12 anos</span>
          <span className="hero-badge-item">⏰ 10 min/dia</span>
          <span className="hero-badge-item">📲 Acesso imediato</span>
          <span className="hero-badge-item">♾️ Acesso vitalício</span>
        </div>

        <a href="#oferta" className="btn-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          Quero Meu Filho Lendo Rápido!
        </a>
        <p className="cta-abaixo">🔒 Compra 100% segura • Acesso imediato por e-mail</p>
      </div>
    </section>
  );
}
