const bonusList = [
  { num: "1", titulo: "Caderno do Alfabeto com Imagens", desc: "Associação visual de letras com imagens para fixação rápida", valor: "R$ 37,00" },
  { num: "2", titulo: "Caderno Quebra-Cabeça do Alfabeto", desc: "Atividades lúdicas de encaixe que tornam o aprendizado uma brincadeira", valor: "R$ 47,00" },
  { num: "3", titulo: "Caderno de Formação de Palavras", desc: "Do fonema à palavra — exercícios progressivos de construção vocabular", valor: "R$ 57,00" },
  { num: "4", titulo: "Caderno Relógio do Alfabeto", desc: "Aprende letras e noção de tempo simultaneamente — dois em um!", valor: "R$ 39,00" },
  { num: "5", titulo: "Caderno de Pontilhado do Alfabeto", desc: "Treino de traçado com pontilhado para desenvolver a escrita correta", valor: "R$ 27,00" },
  { num: "6", titulo: "Caderno Carinhas do Alfabeto", desc: "Expressões faciais associadas a letras — aprendizado emocional e divertido", valor: "R$ 49,00" },
];

export default function Bonus() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="text-center">
          <span className="tag tag--laranja">🎁 Bônus Exclusivos</span>
          <h2 className="titulo">
            6 cadernos bônus incluídos
            <br />
            sem custo adicional!
          </h2>
          <p className="subtitulo mx-auto">
            Ao adquirir o Kit Educakids360 hoje, você recebe
            GRATUITAMENTE estes 6 bônus avaliados em R$ 256,00
          </p>
        </div>
        <div className="bonus-lista">
          {bonusList.map((b) => (
            <div className="bonus-item" key={b.num}>
              <span className="bonus-num">{b.num}</span>
              <div className="bonus-info">
                <h3>{b.titulo}</h3>
                <p>{b.desc}</p>
              </div>
              <div className="bonus-valor">
                Valor: {b.valor}
                <strong>GRÁTIS</strong>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a
            href="#oferta"
            className="btn-cta"
            style={{ background: "linear-gradient(135deg,#FF6D00,#FF8F00)", color: "white" }}
          >
            🎁 Quero o Kit + Todos os Bônus!
          </a>
        </div>
      </div>
    </section>
  );
}
