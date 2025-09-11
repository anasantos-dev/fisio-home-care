
import styles from '../styles/header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoBox}>
        {/* Substitua pelo seu logo se desejar */}
        <span className={styles.logoText}>Israel Cascaes</span>
        <span className={styles.logoSubtitle}>FISIOTERAPIA, REABILITAÇÃO, HOME CARE</span>
      </div>
      <nav className={styles.menuNav}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre Mim</a>
        <a href="#tratamentos">Tratamentos</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </nav>
      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <span className={styles.whatsappIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none"><path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.08L2 22l5.09-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"/><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.205 5.077 4.372.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z"/></svg>
        </span> FALE COMIGO
      </a>
    </header>
  );
}
