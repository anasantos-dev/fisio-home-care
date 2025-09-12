import base from '../styles/inicio.module.css';   // <-- usa o mesmo CSS do Início para o HERO
import styles from '../styles/sobre.module.css';  // <-- CSS só das seções novas
import img from '../assets/Israel-fisio.jpeg';

export function SobreMim() {
  return (
    <main className={base.mainBg}>
      {/* HERO – exatamente o mesmo layout/estilo da página Início */}
      <section className={base.heroSection}>
        <div className={base.heroGradient}>
          <div className={base.heroCard}>
            <div className={base.heroTextBox}>
              <h1 className={base.heroTitle}>
                <span className={base.heroTitleGreen}>Sobre mim<br /></span>
                <span className={base.heroTitleGold}>Fisioterapia humanizada é minha prioridade</span>
              </h1>

              <p className={base.heroDesc}>
                Olá! Eu sou o <b>Dr. Israel Cascaes</b>, fisioterapeuta comprometido em promover saúde,
                autonomia e qualidade de vida em todas as fases da vida. Minha prática é guiada pelo respeito
                às particularidades de cada paciente, oferecendo um atendimento próximo, acolhedor e baseado em escuta atenta.<br /><br />
                Ao longo da minha trajetória, dediquei atenção especial ao cuidado com idosos, auxiliando na
                prevenção de limitações, na recuperação de movimentos e na valorização da independência.
                Acredito que a fisioterapia vai além do tratamento: é uma oportunidade de transformar vidas,
                devolver confiança e proporcionar resultados reais na sua saúde!
              </p>

              <div className={base.heroActions}>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={base.heroBtnSecondary}
                  style={{ padding: '8px 18px', fontSize: '0.98rem' }}
                >
                  <span className={base.heroBtnIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none"><path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.08L2 22l5.09-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"/><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.205 5.077 4.372.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z"/></svg>
                  </span> ENTRE EM CONTATO
                </a>
              </div>
            </div>

            <div className={base.heroImgBox}>
              <img src={img} alt="Fisioterapeuta Dr. Israel Cascaes" className={base.heroImg} />
            </div>
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
