import React from "react";
import Card from "components/Card";
import { CardColor, CardData } from "types/card";
import Head from "next/head";

const LandingPage = () => {
  const handleClick = (card: CardData): void => {
    console.log(card);
  };

  return (
    <div>
      <Head>
        <title>Title TKTKTKTK</title>
      </Head>
      hey it's my page
      <Card
        clickable={true}
        discardable={true}
        card={{ value: 10, color: CardColor.Red }}
        onClick={() => handleClick({ value: 10, color: CardColor.Red })}
      />
      <Card
        clickable={true}
        discardable={true}
        card={{ value: 15, color: CardColor.Blue }}
        onClick={() => handleClick({ value: 15, color: CardColor.Blue })}
      />
    </div>
  );
};

export default LandingPage;
