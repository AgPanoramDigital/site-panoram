import React from 'react';
import { motion, useTransform } from "motion/react";
import Button from './Button';
import ButtonSec from './ButtonSec';

const Card = ({ card, id, progress, range, targetScale }) => {
  const topValue = `calc(10% + ${id * 25}px)`;
  const scale = useTransform(progress, range, [1, targetScale]);

  console.log('Card ID:', card.id);
  console.log('Top Value:', topValue);
  console.log('Scale:', scale);

  return (
    <motion.div
      className={`service-card sticky flex flex-col gap-12 items-center justify-center p-12 rounded-xl ${card.bgClass}`}
      style={{ top: topValue, transform: `scale(${scale.get()})` }}
    >
      <div className="image">
        <img
          alt="Random Image"
          className="rounded-md w-full max-h-[400px] h-full object-cover size-full"
          loading="lazy"
          src={card.imageSrc}
          width={4000}
          height={1000}
        />
      </div>
      <div className="content text-white">
        <h3 className="font-display text-4xl font-medium">{card.title}</h3>
        <p className="font-sans leading-normal mt-5 tracking-normal">
          {card.description}
        </p>
        <div className="flex flex-row gap-4 mt-10">
          <Button url={card.buttonUrl} nameurl={card.buttonText} />
          <ButtonSec url={card.buttonSecUrl} nameurl={card.buttonSecText} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;