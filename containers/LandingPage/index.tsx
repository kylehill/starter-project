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
      <h1>hey it's my page</h1>
      <Card
        clickable={true}
        discardable={true}
        card={{ value: 10, color: CardColor.Red }}
        onClick={handleClick}
      />
      <Card
        clickable={true}
        discardable={true}
        card={{ value: 15, color: CardColor.Blue }}
        onClick={handleClick}
      />
    </div>
  );
};

export default LandingPage;
