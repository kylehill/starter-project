import React from "react";
import Card from "components/Card";
import { CardColor } from "types/card";

const LandingPage = () => {
  return (
    <div>
      hey it's my page
      <Card clickable={true} discardable={true} card={{ value: 10, color: CardColor.Red }} />
      <Card clickable={true} discardable={true} card={{ value: 15, color: CardColor.Blue }} />
    </div>
  );
};

export default LandingPage;
