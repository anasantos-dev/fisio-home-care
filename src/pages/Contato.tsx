import { useState } from "react";
import styles from "../styles/contato.module.css";
import { FaWhatsapp, FaClock, FaEnvelope,} from "react-icons/fa";

export function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mldwygnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        form.reset();
        //  limpa a mensagem depois de 5 segundos
       setTimeout(() => setStatus(""), 5000);

      } else {
        setStatus("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <section id="contato" className={styles.contatoSection}>
      <h2 className={styles.title}>
        Entre em <span className={styles.gold}>Contato</span>
      </h2>
      <p className={styles.subtitle}>
        Entre em contato para tirar dúvidas ou marcar sua consulta. Meu compromisso é levar saúde e bem-estar até você.
      </p>

      <div className={styles.contentGrid}>
        {/* Informações de Contato */}
        <div className={styles.infoBox}>


          <div className={styles.infoItemHorario}>
  <FaClock className={styles.icon} />
     <h3>Horário de Atendimento</h3>
      <p>Segunda a Sexta-feira das 08h às 19h</p>
     <p>Atendimento apenas com horário marcado</p>
      </div>

       <div className={styles.infoItemEmail}>
  <FaEnvelope className={styles.icon} />
  <h3>E-mail</h3>
  <p>israelcascaes83@gmail.com</p>
</div>


 <div className={`${styles.infoItem} ${styles.infoItemWhats}`}>
  <FaWhatsapp className={styles.icon} />
  <div>
    <h3>WhatsApp</h3>
    <a
      href="https://wa.me/5591980254953?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsLink}
    >
      Conversar Agora!
    </a>
  </div>
</div>

          {/* 
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h3>Endereço</h3>
              <p>Av. Dr. Exemplo, 123 - Centro, Santos/SP</p>
            </div>
          </div>
          */}
        </div>

        {/* Formulário */}
        <form className={styles.formBox} onSubmit={handleSubmit}>
          <label>
            Nome*:
            <input name="nome" type="text" placeholder="Digite seu nome" required />
          </label>
          <label>
            E-mail*:
            <input name="email" type="email" placeholder="Digite seu e-mail" required />
          </label>
          <label>
            WhatsApp*:
            <input name="whatsapp" type="tel" placeholder="(xx) xxxxx-xxxx" required />
          </label>
          <label>
            Horário Desejado*:
            <select name="horario" required>
              <option value="">Selecione Período</option>
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </label>
          <label>
            Tratamento*:
            <select name="tratamento" required>
              <option value="">Selecione Tratamento</option>
              <option>Fisioterapia Ortopédica</option>
              <option>Fisioterapia Neurológica</option>
              <option>Fisioterapia Respiratória</option>
            </select>
          </label>

          <button type="submit" className={styles.button}>
            📩 Agendar Consulta
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
