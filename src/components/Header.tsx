import styles from "../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Logo e nome */}
      <div className={styles.logo}>
        <h1>Dr. Israel Cascaes</h1>
        <span>Fisioterapia e Reabilitação</span>
      </div>

      {/* Navegação central */}
      <nav className={styles.nav}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre Mim</a>
        <a href="#tratamentos">Sua Saúde</a>
        <a href="#avaliacoes">Avaliações</a>
        <a href="#informacoes">Informações Úteis</a>
        <a href="#contato">Contato</a>
      </nav>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
      >
        <i className="fab fa-whatsapp"></i> Fale no WhatsApp
      </a>



    </header>
  );
}
