import styles from "../styles/tratamentos.module.css";

// importa imagens
import reabilitacaoImg from "../assets/tratamentos/reabilitacao.jpeg";
import mobilidadeImg from "../assets/tratamentos/mobilidade.jpg";
import doresImg from "../assets/tratamentos/dores.jpg";
import geriatricaImg from "../assets/tratamentos/geriatrica.jpg";
import neurologicaImg from "../assets/tratamentos/neurologica.jpg";
import respiratoriasImg from "../assets/tratamentos/respiratorias.jpg";
import ultrassomImg from "../assets/tratamentos/ultrason.jpg";
import eletroterapiaImg from "../assets/tratamentos/eletroterapia.jpg";

export function Tratamentos() {
  const cards = [
    {
      img: reabilitacaoImg,
      titulo: "Reabilitação de Lesões",
      desc: "Tratamentos focados em acelerar a recuperação e restaurar funções após lesões."
    },
    {
      img: mobilidadeImg,
      titulo: "Melhoria da Mobilidade",
      desc: "Exercícios e técnicas para aumentar a flexibilidade e amplitude de movimento."
    },
    {
      img: doresImg,
      titulo: "Alívio de Dores",
      desc: "Recursos fisioterapêuticos para reduzir dores musculares e articulares."
    },
    {
      img: geriatricaImg,
      titulo: "Fisioterapia Geriátrica",
      desc: "Tratamento especializado para idosos, promovendo autonomia e qualidade de vida."
    },
    {
      img: neurologicaImg,
      titulo: "Condições Neurológicas",
      desc: "Reabilitação para pacientes com sequelas neurológicas, como AVC ou Parkinson."
    },
    {
      img: respiratoriasImg,
      titulo: "Condições Respiratórias",
      desc: "Técnicas para melhorar a respiração e fortalecer o sistema pulmonar."
    },
    {
      img: ultrassomImg,
      titulo: "Ultrassom Terapêutico",
      desc: "Uso de ondas sonoras para acelerar recuperação, reduzir inflamações e regenerar tecidos."
    },
    {
      img: eletroterapiaImg,
      titulo: "Eletroterapia",
      desc: "Técnicas com correntes elétricas para analgesia, fortalecimento e reabilitação muscular."
    }
  ];

  return (
    <section id="tratamentos" className={styles.tratamentosSection}>
      <h2 className={styles.title}>Cuidado Sob Medida</h2>
      <div className={styles.divider}>
       
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        
      </div>
      <p className={styles.subtitle}>
        Conheça os principais tratamentos oferecidos para promover sua recuperação, prevenir lesões e melhorar sua qualidade de vida.
      </p>

      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.titulo} className={styles.cardImg} />
            <h3>{card.titulo}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
