import { CardColor } from "types/card";
import React from "react";
import Card from "./index";

export default {
  title: "Card",
  component: Card,
};

export const standard = () => (
  <Card
    discardable={true}
    clickable={true}
    onClick={() => {}}
    card={{ value: 10, color: CardColor.White }}
  />
);

export const withColor = () => (
  <Card
    onClick={() => {}}
    discardable={true}
    clickable={true}
    card={{ value: 20, color: CardColor.Red }}
  />
);
