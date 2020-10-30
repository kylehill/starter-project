import React from "react";
import { CardData } from "types/card";

import styles from "./index.module.css";

type CardProps = {
  card: CardData;
  onClick?: () => void;
  clickable: boolean;
  discardable: boolean;
};

const Card = ({ card, onClick, clickable }: CardProps) => {
  const clickHandler = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.border} ${styles[card.color]}`} onClick={clickHandler}>
        <div className={styles.internal}>{card.value}</div>
      </div>
    </div>
  );
};

export default Card;
