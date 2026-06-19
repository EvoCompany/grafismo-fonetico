import Image from "next/image";

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
            <Image
              src="/images/crianca-metodo.png"
              alt="Criança executando o método Grafismo Fonético"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
            />
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
                    <p><strong>{item.titulo}</strong></p>
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
