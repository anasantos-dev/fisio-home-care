import base from '../styles/inicio.module.css';   // <-- usa o mesmo CSS do Início para o HERO
import styles from '../styles/sobre.module.css';  // <-- CSS só das seções novas
import img from '../assets/sobreMim.jpg';

export function SobreMim() {
  return (
    <main className={base.mainBg}>
      {/* HERO – agora com fundo branco apenas nesta seção */}
      <section className={base.heroSectionSobre}>
        <div className={base.heroCard}>
          <div className={base.heroTextBox}>
            <h1 className={base.heroTitle}>
              <span className={base.heroTitleGreen}>Sobre mim<br /></span>
              <span className={base.heroTitleGold}>Fisioterapia humanizada é minha prioridade</span>
            </h1>

            <p className={base.heroDesc}>
              Olá! Eu sou  <b>Israel Cascaes</b>, fisioterapeuta comprometido em promover saúde,
              autonomia e qualidade de vida em todas as fases da vida. Minha prática é guiada pelo respeito
              às particularidades de cada paciente, oferecendo um atendimento próximo, acolhedor e baseado em escuta atenta.<br /><br />
              Ao longo da minha trajetória, dediquei atenção especial ao cuidado com idosos, auxiliando na
              prevenção de limitações, na recuperação de movimentos e na valorização da independência.
              Acredito que a fisioterapia vai além do tratamento: é uma oportunidade de transformar vidas,
              devolver confiança e proporcionar resultados reais na sua saúde!
            </p>

            <div className={styles.ctaBox}>
  <h3>Agende sua consulta e cuide da sua saúde hoje mesmo!</h3>
 <a
  href="https://wa.me/5591980254953"
  target="_blank"
  rel="noopener noreferrer"
  className={base.heroBtnSecondary}
>
  ENTRE EM CONTATO
</a>
</div>

          </div>

          <div className={base.heroImgBox}>
  <img 
    src={img} 
    alt="Fisioterapeuta Dr. Israel Cascaes" 
    className={`${base.heroImg} ${styles.heroImgSobre}`} 
  />
</div>

        </div>
        
      </section>

      {/* CURRÍCULO – timeline e experiência */}
      <section className={styles.curriculoWrap}>
        {/* Formação */}
        <div className={styles.colLeft}>
          <h2 className={styles.blockTitle}>
            <span>Trajetória em </span><strong>Fisioterapia</strong>
          </h2>
          <ol className={styles.eduTimeline}>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Graduação em Fisioterapia</h3>
                <p>Universidade XXXXX</p>
              </div>
            </li>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Especialização em Fisioterapia XXXXXXXXXXXX</h3>
                <p>Universidade XXXXXC</p>
              </div>
            </li>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Certificação em XXXXXXXXXXXXXXXX</h3>
                <p>XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Divisor central */}
        <div className={styles.colCenter}>
          <span className={styles.centerLine} />
          <div className={`${styles.centerMark} ${styles.markTop}`}>
            <span className={styles.markDot}></span>
            <span className={styles.markYear}>202x</span>
          </div>
          <div className={`${styles.centerMark} ${styles.markMid}`}>
            <span className={styles.markIcon}>💼</span>
            <span className={styles.markYear}>202x</span>
          </div>
          <div className={`${styles.centerMark} ${styles.markBottom}`}>
            <span className={styles.markDot}></span>
          </div>
        </div>

        {/* Experiência */}
        <div className={styles.colRight}>
          <h2 className={styles.blockTitle}>
            <span>Atuação como </span><strong>Fisioterapeuta</strong>
          </h2>
          <div className={styles.expItem}>
            <div className={styles.expYear}>202X</div>
            <div className={styles.expText}>
              <p><strong>Início da prática clínica</strong> com foco em idosos</p>
            </div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expYear}>202X</div>
            <div className={styles.expText}>
              <p><strong>+XX anos de experiência</strong> em reabilitação e prevenção</p>
            </div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expYear}>Hoje</div>
            <div className={styles.expText}>
              <p>Atuação em reabilitação, com atenção especial à autonomia e segurança de idosos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
