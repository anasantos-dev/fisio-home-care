import { useState } from 'react';
import styles from '../styles/informacoesUteis.module.css';

export function InformacoesUteis() {
  const perguntas = [
    {
      id: 1,
      pergunta: 'Como funciona o atendimento?',
      resposta: 'O atendimento é realizado com hora marcada. Você pode agendar diretamente pelo WhatsApp ou pelo formulário de contato.',
    },
    {
      id: 2,
      pergunta: 'Quais são as formas de pagamento?',
      resposta: 'Aceitamos dinheiro, Pix e cartões de crédito/débito.',
    },
    {
      id: 3,
      pergunta: 'Preciso de encaminhamento médico?',
      resposta: 'Não é obrigatório, mas pode ser recomendado dependendo do seu caso específico.',
    },
     {
      id: 4,
      pergunta: 'Quanto tempo costuma durar uma sessão de fisioterapia?',
      resposta:
        'Depende do objetivo do tratamento e do estado físico do paciente. Normalmente uma sessão varia entre 45 e 60 minutos. Para idosos ou pessoas com limitações, pode ser um pouco mais curta, adaptada às condições individuais.',
    },
    {
      id: 5,
      pergunta: 'A fisioterapia ortopédica é eficaz para dores crônicas?',
      resposta:
        'Sim. Técnicas como exercícios terapêuticos, terapia manual e eletroterapia ajudam a reduzir a dor crônica, melhorar a mobilidade e aumentar a qualidade de vida de forma significativa.',
    },
    {
      id: 6,
      pergunta: 'Quando é recomendado iniciar a fisioterapia após uma cirurgia?',
      resposta:
        'O ideal é começar o quanto antes, sempre com liberação médica. A intervenção precoce ajuda a diminuir complicações, controlar inchaços e rigidez, e favorece uma recuperação mais rápida e completa.',
    },
    {
      id: 7,
      pergunta: 'Quantas sessões são necessárias para perceber resultados?',
      resposta:
        'Isso varia de acordo com a gravidade da lesão, idade e objetivos do tratamento. Em muitos casos, já é possível notar melhora após 4 a 6 semanas de fisioterapia regular, com 2 a 3 sessões por semana.',
    },
    {
      id: 8,
      pergunta: 'Qual é o papel da fisioterapia para pessoas idosas?',
      resposta:
        'O objetivo é preservar ou recuperar a autonomia nas atividades diárias, prevenir quedas, melhorar equilíbrio, força e flexibilidade, além de favorecer a função respiratória e cardiovascular, aumentando a qualidade de vida.',
    },

  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const togglePergunta = (id: number) => {
    setAtivo(ativo === id ? null : id);
  };

  return (
    <section className={styles.informacoesSection}>
      
      <h2 className={styles.title}>
        O que você <span className={styles.highlight}>precisa saber</span>
      </h2>

      {/* Divider com linha e bolinhas */}
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      {/* Texto explicativo */}
      <p className={styles.subText}>
        Encontre aqui respostas para as principais dúvidas e descubra como a fisioterapia pode transformar sua saúde e promover seu bem-estar.
      </p>

      <div className={styles.accordion}>
        {perguntas.map((item) => (
          <div key={item.id} className={styles.item}>
            <button
              className={`${styles.pergunta} ${
                ativo === item.id ? styles.ativo : ''
              }`}
              onClick={() => togglePergunta(item.id)}
            >
              {item.pergunta}
              <span className={styles.icon}>
                {ativo === item.id ? '▲' : '▼'}
              </span>
            </button>
            <div
              className={`${styles.resposta} ${
                ativo === item.id ? styles.aberta : ''
              }`}
            >
              {item.resposta}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
