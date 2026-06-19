const itens = [
  {
    titulo: "Ativa múltiplas áreas do cérebro ao mesmo tempo",
    desc: "A criança vê, escreve e pronuncia — memorização natural",
  },
  {
    titulo: "Sem pressão ou memorização forçada",
    desc: "A aprendizagem acontece de forma lúdica e prazerosa",
  },
  {
    titulo: "Funciona para crianças com TDAH e autismo",
    desc: "O estímulo multissensorial facilita o foco e a retenção",
  },
  {
    titulo: "Resultados visíveis em 2 semanas",
    desc: "Mães reportam evolução significativa desde a 1ª semana",
  },
  {
    titulo: "Apenas 10 minutos por dia",
    desc: "Fácil de encaixar na rotina sem virar obrigação",
  },
];

export default function Solucao() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="text-center">
          <span className="tag">A Solução</span>
          <h2 className="titulo">
            O Grafismo Fonético combina
            <br />
            movimento e som para acelerar a leitura
          </h2>
        </div>
        <div className="solucao-wrap">
          <div className="solucao-img">
            <svg
              viewBox="0 0 380 300"
              xmlns="http://www.w3.org/2000/svg"
              style={{ borderRadius: "16px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
            >
              <rect width="380" height="300" rx="16" fill="#E8F5E9" />
              <circle cx="190" cy="130" r="80" fill="#C8E6C9" opacity="0.5" />
              <text x="190" y="100" fontFamily="Fredoka One,cursive" fontSize="52" fill="#2E7D32" textAnchor="middle" opacity="0.9">GA</text>
              <text x="190" y="155" fontFamily="Fredoka One,cursive" fontSize="52" fill="#388E3C" textAnchor="middle" opacity="0.8">TO</text>
              <text x="190" y="210" fontFamily="Nunito,sans-serif" fontSize="15" fill="#1B5E20" textAnchor="middle" fontWeight="700">ga-to • 2 sílabas</text>
              <path d="M60,130 Q70,110 80,130 Q90,150 100,130" stroke="#66BB6A" strokeWidth="3" fill="none" />
              <path d="M48,130 Q62,100 76,130 Q90,160 104,130" stroke="#81C784" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M270,130 Q280,110 290,130 Q300,150 310,130" stroke="#66BB6A" strokeWidth="3" fill="none" />
              <path d="M258,130 Q272,100 286,130 Q300,160 314,130" stroke="#81C784" strokeWidth="2" fill="none" opacity="0.6" />
              <rect x="0" y="255" width="380" height="45" rx="0" fill="#2E7D32" />
              <text x="190" y="284" fontFamily="Fredoka One,cursive" fontSize="16" fill="white" textAnchor="middle">Método Fonético + Grafomotor</text>
            </svg>
          </div>
          <div>
            <p className="subtitulo" style={{ marginBottom: "24px" }}>
              Originário dos EUA, o método une{" "}
              <strong>traçado de letras</strong> com{" "}
              <strong>sons e sílabas</strong>, criando conexões neurais que
              aceleram a alfabetização de forma natural.
            </p>
            <ul className="solucao-lista">
              {itens.map((item) => (
                <li key={item.titulo}>
                  <span className="check-icon">✅</span>
                  <div>
                    <p>{item.titulo}</p>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
