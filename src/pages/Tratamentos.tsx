import styles from "../styles/tratamentos.module.css";
import reabilitacaoImg from "../assets/tratamentos/reabilitacao.jpeg"; 


export function Tratamentos() {
  return (
    <section id="tratamentos" className={styles.tratamentosSection}>
      <h2 className={styles.title}>Cuidando da Sua Saúde</h2>
      <div className={styles.divider}>
  <span className={styles.dot}></span>
  <span className={styles.dot}></span>
  <span className={styles.line}></span>
  <span className={styles.dot}></span>
  <span className={styles.dot}></span>
</div>
      <p className={styles.subtitle}>
        Conheça os principais tratamentos oferecidos para promover sua
        recuperação, prevenir lesões e melhorar sua qualidade de vida.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>          

          <h3>Reabilitação de Lesões</h3>
         <img
            src={reabilitacaoImg}
            alt="Reabilitação Personalizada"
            className={styles.cardImg}
          />

          <p>Recuperação funcional após traumas, cirurgias ou acidentes.</p>
        </div>

        <div className={styles.card}>
          <h3>Melhoria da Mobilidade</h3>
          <p>Exercícios terapêuticos para aumentar flexibilidade e força.</p>
        </div>

        <div className={styles.card}>
          <h3>Alívio de Dores</h3>
          <p>Técnicas manuais e recursos físicos para reduzir dores musculares e articulares.</p>
        </div>

        <div className={`${styles.card} ${styles.destaque}`}>
          <h3>Fisioterapia Geriátrica</h3>
          <p>Tratamento especializado para idosos, visando autonomia e qualidade de vida.</p>
        </div>

        <div className={styles.card}>
          <h3>Condições Neurológicas</h3>
          <p>Reabilitação em casos de AVC, Parkinson e outras condições neurológicas.</p>
        </div>

        <div className={styles.card}>
          <h3>Condições Respiratórias</h3>
          <p>Técnicas de fisioterapia respiratória para melhora da capacidade pulmonar.</p>
        </div>

        {/* NOVOS CARDS */}
        <div className={styles.card}>
          <h3>Ultrassom Terapêutico</h3>
          <p>
            Uso de ondas sonoras para acelerar a recuperação de lesões, reduzir
            inflamações e melhorar a circulação. Indicado para tendinites,
            entorses, lesões musculares e fascite plantar.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Eletroterapia</h3>
          <p>
            Correntes elétricas de baixa intensidade aplicadas para alívio da
            dor, redução da inflamação, melhora da circulação e fortalecimento
            muscular na reabilitação.
          </p>
        </div>
      </div>
    </section>
  );
}
