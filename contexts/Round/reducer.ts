import { CardData } from "types/card";
import shuffle from "util/shuffle";

export type RoundState = {
  target: number;
  discards: number;
  hand: CardData[];
  deck: CardData[];
  played: CardData[];
  complete: boolean;
};

export type RoundAction =
  | {
      type: "click_card";
      index: number;
    }
  | {
      type: "discard_card";
      index: number;
    }
  | {
      type: "start_round";
      target: number;
      discards: number;
      handSize: number;
      deck: CardData[];
    };

export const reducer = (state: RoundState, action: RoundAction): RoundState => {
  switch (action.type) {
    case "click_card": {
      const card = state.hand[action.index];
      if (card.value > state.target) {
        return state;
      }

      const hand = [
        ...state.hand.slice(0, action.index),
        state.deck[0],
        ...state.hand.slice(action.index + 1),
      ].filter((a) => a);

      const target = state.target - card.value;

      return {
        ...state,
        target,
        hand,
        deck: [...state.deck.slice(1)],
        played: state.played.concat(card),
        complete: hand.every((card) => card.value > target),
      };
    }

    case "discard_card": {
      if (state.discards === 0) {
        return state;
      }

      const hand = [
        ...state.hand.slice(0, action.index),
        state.deck[0],
        ...state.hand.slice(action.index + 1),
      ].filter((a) => a);

      return {
        ...state,
        hand,
        deck: [...state.deck.slice(1)],
        discards: state.discards - 1,
      };
    }

    case "start_round": {
      const shuffled = shuffle(action.deck);

      return {
        ...state,
        target: action.target,
        discards: action.discards,
        hand: shuffled.slice(0, action.handSize),
        deck: shuffled.slice(action.handSize),
        played: [],
      };
    }
  }
};

export const initialState: RoundState = {
  target: 0,
  discards: 0,
  hand: [],
  deck: [],
  played: [],
  complete: false,
};
