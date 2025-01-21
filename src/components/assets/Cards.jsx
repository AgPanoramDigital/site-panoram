import React, { useRef, useEffect } from 'react';
import cardsData from './cardsData.json';
import Card from './Card';
import { useScroll } from 'framer-motion';

const Cards = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    console.log('Component mounted');
    console.log('cardsData:', cardsData);
  }, []);

  useEffect(() => {
    console.log('scrollYProgress changed:', scrollYProgress.get());
  }, [scrollYProgress]);

  console.log('Rendering Cards component');
  console.log('scrollYProgress:', scrollYProgress);

  return (
    <section ref={container} className="sticky top-0 h-full grid place-content-center gap-80 mt-[30dvh]">
      {cardsData.map((card, index) => {
        const targetScale = 1 - (cardsData.length - index) * 0.05;
        const range = [index * 0.25, 1];

        console.log('Card ID:', card.id);
        console.log('Index:', index);
        console.log('Target Scale:', targetScale);
        console.log('Range:', range);

        return (
          <Card
            key={card.id}
            card={card}
            id={index}
            range={range}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Cards;