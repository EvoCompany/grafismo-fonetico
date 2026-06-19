import Image from "next/image";

const bonusList = [
  {
    num: "Bônus 1",
    titulo: "Caderno do Alfabeto com Imagens",
    desc: "Associação visual de letras com imagens para fixação rápida",
    img: "/images/bonus-1.png",
    valor: "R$ 37,00",
  },
  {
    num: "Bônus 2",
    titulo: "Caderno Quebra-Cabeça do Alfabeto",
    desc: "Atividades lúdicas de encaixe que tornam o aprendizado uma brincadeira",
    img: "/images/bonus-2.png",
    valor: "R$ 47,00",
  },
  {
    num: "Bônus 3",
    titulo: "Caderno de Formação de Palavras",
    desc: "Do fonema à palavra — exercícios progressivos de construção vocabular",
    img: "/images/bonus-3.png",
    valor: "R$ 57,00",
  },
  {
    num: "Bônus 4",
    titulo: "Caderno Relógio do Alfabeto",
    desc: "Aprende letras e noção de tempo simultaneamente — dois em um!",
    img: "/images/bonus-4.png",
    valor: "R$ 39,00",
  },
  {
    num: "Bônus 5",
    titulo: "Caderno de Pontilhado do Alfabeto",
    desc: "Treino de traçado com pontilhado para desenvolver a escrita correta",
    img: "/images/bonus-5.png",
    valor: "R$ 27,00",
  },
  {
    num: "Bônus 6",
    titulo: "Caderno Carinhas do Alfabeto",
    desc: "Expressões faciais associadas a letras — aprendizado emocional e divertido",
    img: "/images/bonus-6.png",
    valor: "R$ 49,00",
  },
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

        <div className="bonus-grid">
          {bonusList.map((b) => (
            <div className="bonus-card" key={b.num}>
              <div className="bonus-card-img">
                <Image
                  src={b.img}
                  alt={b.titulo}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bonus-card-body">
                <span className="bonus-num">{b.num}</span>
                <div className="bonus-info">
                  <h3>{b.titulo}</h3>
                  <p>{b.desc}</p>
                </div>
                <div className="bonus-valor">
                  <span className="bonus-valor-de">Valor: {b.valor}</span>
                  <strong>GRÁTIS</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#oferta" className="btn-cta">
            🎁 Quero o Kit + Todos os Bônus!
          </a>
        </div>
      </div>
    </section>
  );
}
