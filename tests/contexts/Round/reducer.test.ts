import { initialState, reducer, RoundAction, RoundState } from "contexts/Round/reducer";
import { CardColor, CardData } from "types/card";

const makeCard = (value: number, color: CardColor): CardData => {
  return { value, color };
};

let state: RoundState;

beforeEach(() => {
  state = {
    target: 20,
    discards: 1,
    deck: [makeCard(10, CardColor.Yellow), makeCard(20, CardColor.White)],
    hand: [
      makeCard(15, CardColor.Red),
      makeCard(20, CardColor.Blue),
      makeCard(25, CardColor.Green),
    ],
    played: [makeCard(10, CardColor.Blue)],
    complete: false,
  };
});

describe("type: click_card", () => {
  test("updates state when card played", () => {
    const action: RoundAction = {
      type: "click_card",
      index: 0,
    };

    const newState = reducer(state, action);
    expect(newState.target).toEqual(5);
    expect(newState.hand).toEqual([
      makeCard(10, CardColor.Yellow),
      makeCard(20, CardColor.Blue),
      makeCard(25, CardColor.Green),
    ]);
    expect(newState.deck).toHaveLength(1);
    expect(newState.played).toHaveLength(2);
    expect(newState.complete).toEqual(true);
  });

  test("doesn't allow illegal card plays", () => {
    const action: RoundAction = {
      type: "click_card",
      index: 2,
    };

    const newState = reducer(state, action);
    expect(newState.target).toEqual(20);
    expect(newState.complete).toEqual(false);
  });

  test("sets complete only if complete", () => {
    state.target = 50;
    const action: RoundAction = {
      type: "click_card",
      index: 2,
    };

    const newState = reducer(state, action);
    expect(newState.target).toEqual(25);
    expect(newState.hand).toEqual([
      makeCard(15, CardColor.Red),
      makeCard(20, CardColor.Blue),
      makeCard(10, CardColor.Yellow),
    ]);
    expect(newState.complete).toEqual(false);
  });
});

describe("type: discard_card", () => {
  test("updates state when card discarded", () => {
    const action: RoundAction = {
      type: "discard_card",
      index: 2,
    };

    const newState = reducer(state, action);
    expect(newState.target).toEqual(20);
    expect(newState.discards).toEqual(0);
    expect(newState.hand).toEqual([
      makeCard(15, CardColor.Red),
      makeCard(20, CardColor.Blue),
      makeCard(10, CardColor.Yellow),
    ]);
    expect(newState.deck).toHaveLength(1);
    expect(newState.played).toHaveLength(1);
  });

  test("doesn't discard if discards = 0", () => {
    state.discards = 0;
    const action: RoundAction = {
      type: "discard_card",
      index: 2,
    };

    const newState = reducer(state, action);
    expect(newState.hand).toEqual([
      makeCard(15, CardColor.Red),
      makeCard(20, CardColor.Blue),
      makeCard(25, CardColor.Green),
    ]);
  });
});

describe("type: start_round", () => {
  let deck: CardData[] = [];

  beforeEach(() => {
    deck = [
      {
        value: 1,
        color: CardColor.Blue,
      },
      {
        value: 2,
        color: CardColor.Red,
      },
      {
        value: 3,
        color: CardColor.Green,
      },
      {
        value: 4,
        color: CardColor.Yellow,
      },
    ];
  });

  test("uses action parameters", () => {
    const action: RoundAction = {
      type: "start_round",
      discards: 3,
      handSize: 2,
      target: 100,
      deck,
    };

    const newState = reducer(initialState, action);
    expect(newState.hand).toHaveLength(2);
    expect(newState.deck).toHaveLength(2);
    expect(newState.target).toEqual(100);
    expect(newState.discards).toEqual(3);
  });

  test("shuffles deck", () => {
    const action: RoundAction = {
      type: "start_round",
      discards: 0,
      handSize: 2,
      target: 100,
      deck,
    };

    jest.spyOn(global.Math, "random").mockReturnValue(0.999);
    const newState = reducer(initialState, action);
    jest.spyOn(global.Math, "random").mockRestore();

    expect(newState.hand).toEqual([
      {
        value: 4,
        color: CardColor.Yellow,
      },
      {
        value: 3,
        color: CardColor.Green,
      },
    ]);

    expect(newState.deck).toEqual([
      {
        value: 2,
        color: CardColor.Red,
      },
      {
        value: 1,
        color: CardColor.Blue,
      },
    ]);
  });
});
