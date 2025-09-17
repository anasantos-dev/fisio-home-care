import { useState } from "react";
import styles from "../styles/header.module.css";
import logoImg from "../assets/logo.jpeg"; // 👈 nova logo

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo + nome */}
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo Israel Cascaes" className={styles.logoImg} />
        <div>
          <h1>ISRAEL CASCAES</h1>
          <span>Fisioterapia Domiciliar</span>
        </div>
      </div>

      {/* Botão Menu Hamburguer (mobile) */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Overlay (fundo escuro) */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

      {/* Navegação */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
        <a href="#tratamentos" onClick={() => setMenuOpen(false)}>Sua Saúde</a>
        <a href="#avaliacoes" onClick={() => setMenuOpen(false)}>Avaliações</a>
        <a href="#informacoes" onClick={() => setMenuOpen(false)}>Informações Úteis</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      {/* Botão WhatsApp (desktop apenas) */}
      <a
        href="https://wa.me/5591980254953"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
      >
        <i className="fab fa-whatsapp"></i> Fale no WhatsApp
      </a>
    </header>
  );
}
