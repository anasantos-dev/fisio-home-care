import styles from "../styles/chamada.module.css";

export function Chamada() {
  return (
    <section className={styles.chamadaSection}>
      <h2 className={styles.title}>
        <span className={styles.green}>Sua saúde merece atenção especial,</span>{" "}
        <span className={styles.gold}>comece hoje!</span>
      </h2>

      {/* divider com linha e bolinhas */}
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      <p className={styles.subtitle}>
        Recupere sua energia e bem-estar com fisioterapia personalizada para
        suas necessidades.
      </p>

      <div className={styles.highlightBox}>
       <h3>
  <span> Dê o primeiro passo para cuidar de você </span>
  <span className={styles.highlightText}>agora mesmo!</span>
</h3>

        <a
  href="https://wa.me/5591980254953?text=Oi, gostaria de marcar um horário de fisioterapia. Pode me ajudar?"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className={styles.button}>AGENDAR ATENDIMENTO</button>
</a>

      </div>
    </section>
  );
}
