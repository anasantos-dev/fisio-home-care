import styles from "../styles/footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoBox}>
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
          <span className={styles.brand}>
            Dr. Israel Cascaes
            <small>Fisioterapia e Reabilitação</small>
          </span>
        </div>

        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#tratamentos">Sua Saúde</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#informacoes">Informações Úteis</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className={styles.social}>
          <a href="https://wa.me/5591980254953" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Dr. Israel Cascaes - Todos os direitos reservados.
      </div>
    </footer>
  );
}
