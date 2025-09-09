import styles from '../styles/inicio.module.css';
import img from '../assets/Israel-fisio.jpeg'; // você pode trocar pela imagem real

export function Inicio() {
  return (
    <div className={styles.pageContainer}>
      <h1>FISIOTERAPIA DOMICILIAR </h1>
      <p>Atendimento <strong>personalizado</strong> no conforto da sua casa. Reabilitação, alívio de dores e qualidade de vida.</p>

      <div className={styles.content}>
        <img src={img} alt="Fisioterapeuta com paciente" />
        <div className={styles.text}>
          <h2>Fisioterapia Domiciliar</h2>
          <p>Atendimento personalizado no conforto da sua casa. Reabilitação, alívio de dores e qualidade de vida.</p>
          <button>Agendar pelo WhatsApp</button>
          <ul>
            <li>✔️ CREFITO registrado</li>
            <li>✔️ Atendimento domiciliar</li>
            <li>✔️ Horários flexíveis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
