import styles from '../styles/header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Portfólio</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}
