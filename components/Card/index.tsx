import React from "react";
import { useButton } from "react-aria";
import { CardData } from "types/card";

import styles from "./index.module.css";

type CardProps = {
  card: CardData;
  onClick?: (card: CardData) => void;
  clickable: boolean;
  discardable: boolean;
};

const Card = ({ card, onClick, clickable }: CardProps) => {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(
    {
      onPress: () => clickable && onClick && onClick(card),
    },
    ref
  );

  return (
    <button ref={ref} className={`${styles.border} ${styles[card.color]}`} {...buttonProps}>
      <div className={styles.internal}>{card.value}</div>
    </button>
  );
};

export default Card;
