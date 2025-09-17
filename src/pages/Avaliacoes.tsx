import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from '../styles/avaliacoes.module.css';

export function Avaliacoes() {
  const avaliacoes = [
    { id: 1, nome: 'Rogério S. J.', texto: 'Os preços das consultas são bem acessíveis. Eu e minha filha que é minha dependente estamos muito satisfeitos.' },
    { id: 2, nome: 'Bruno R. T.', texto: 'Gostei da agilidade no atendimento, o atendimento também é dinâmico e claro com todas as informações. Melhor que muitos planos de saúde.' },
    { id: 3, nome: 'Robson N. S.', texto: 'Muito fácil a utilização do serviço e os preços são acessíveis, bem menores das clínicas particulares.' },
    { id: 4, nome: 'ANA', texto: 'Os preços das consultas são bem acessíveis. Eu e minha filha que é minha dependente estamos muito satisfeitos.' },
    { id: 5, nome: 'Carol', texto: 'Gostei da agilidade no atendimento, o atendimento também é dinâmico e claro com todas as informações. Melhor que muitos planos de saúde.' },
    { id: 6, nome: 'Waldir', texto: 'Muito fácil a utilização do serviço e os preços são acessíveis, bem menores das clínicas particulares.' },
    { id: 7, nome: 'Lailson', texto: 'Os preços das consultas são bem acessíveis. Eu e minha filha que é minha dependente estamos muito satisfeitos.' },
    { id: 8, nome: 'Luis', texto: 'Gostei da agilidade no atendimento, o atendimento também é dinâmico e claro com todas as informações. Melhor que muitos planos de saúde.' },
    { id: 9, nome: 'Isaque', texto: 'Muito fácil a utilização do serviço e os preços são acessíveis, bem menores das clínicas particulares.' },
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  return (
    <section className={styles.avaliacoesSection}>
     

      {/* Título */}
      <h2 className={styles.title}>
        Confira a <span className={styles.highlight}>opinião</span> de quem já cuidou da saúde com{' '}
        <strong>Dr. Israel Cascaes</strong>
      </h2>

      {/* Wrapper */}
      <div className={styles.swiperWrapper}>
        {/* Botões de navegação */}
        <button className={`${styles.navBtn} ${styles.prevBtn}`}>←</button>
        <button className={`${styles.navBtn} ${styles.nextBtn}`}>→</button>

        {/* Swiper */}
       <Swiper
  modules={[Navigation]}
  slidesPerView={1}        
  spaceBetween={24}
  speed={600}
  grabCursor={true}
  navigation={{
    nextEl: `.${styles.nextBtn}`,
    prevEl: `.${styles.prevBtn}`,
  }}
  onSwiper={(swiper) => {
    const perView = swiper.params.slidesPerView as number;
    setTotalPaginas(Math.ceil(avaliacoes.length / perView));
  }}
  onSlideChange={(swiper) => {
    const perView = swiper.params.slidesPerView as number;
    const currentPage = Math.floor(swiper.activeIndex / perView) + 1;
    setPaginaAtual(currentPage);
  }}
  breakpoints={{
    0: { slidesPerView: 1 },     // mobile
    768: { slidesPerView: 1 },   // tablet
    1024: { slidesPerView: 1 },  // desktop
  }}
>
  {avaliacoes.map((av) => (
    <SwiperSlide key={av.id}>
      <div className={styles.card}>
        <span className={styles.quote}>&ldquo;</span>
        <p className={styles.text}>{av.texto}</p>
        <div className={styles.author}>{av.nome}</div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      {/* Página atual */}
      <div className={styles.page}>
        {String(paginaAtual).padStart(2, '0')} de {String(totalPaginas).padStart(2, '0')}
      </div>
    </section>
  );
}
