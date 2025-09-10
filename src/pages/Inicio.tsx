
import React from "react";
import styles from '../styles/inicio.module.css';
import img from '../assets/Israel-fisio.jpeg';

export function Inicio() {
  return (
    <main className={styles.mainBg}>
      <section className={styles.heroSection}>
        <div className={styles.heroGradient}>
          <h1 className={styles.heroTitle}>
            FISIOTERAPIA DOMICILIAR<br />
          </h1>
          <p className={styles.heroSubtitle}>
            Qualidade de vida, no conforto de seu lar.
          </p>
        </div>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <div className={styles.infoTextBox}>
            <h2 className={styles.infoTitle}>Fisioterapia Domiciliar</h2>
            <p className={styles.infoDesc}>
              Atendimento personalizado no conforto da sua casa. Reabilitação, alívio de dores e qualidade de vida.
            </p>
          </div>
          <img src={img} alt="Fisioterapeuta atendendo paciente" className={styles.infoImg} />
          <div className={styles.diferenciaisVertical}>
            <span>✓ CREFITO registrado</span>
            <span>✓ Atendimento domiciliar</span>
            <span>✓ Horários flexíveis</span>
          </div>
        </div>
      </section>
  {/* Rodapé removido conforme solicitado */}
    </main>
  );
}
