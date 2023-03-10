import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Card from "../../src/components/card/card";

describe("Card component", () => {
  it("should render the card", () => {
    const { container } = render(
      <Card
        title="Test title"
        liked={false}
        onClickLike={() => {}}
        author={"Test author"}
        date={new Date(2023, 2, 3)}
        link={"https://www.google.com"}
      />
    );

    const card = container.getElementsByClassName("card");
    expect(card.length).toBe(1);

    const cardlike = container.getElementsByClassName("card-likebtn");
    expect(cardlike.length).toBe(1);
    const cardlikebtn = container.querySelector(".card-likebtn button");
    expect(cardlikebtn).not.toBe(null);

    const cardContent = container.querySelector(".card-likebtn button");
    expect(cardContent).not.toBe(null);

    const cardDate = container.querySelector(".card-date");
    expect(cardDate).not.toBe(null);
    const cardDateIcon = container.querySelector(".card-date svg");
    expect(cardDateIcon).not.toBe(null);

    const cardText = container.querySelector(".card-text");
    expect(cardText).not.toBe(null);
    const cardTextLink = container.querySelector(".card-text a");
    expect(cardTextLink).not.toBe(null);
  });

  it("on like click should emit the event", async () => {
    const onClickLike = vi.fn();

    const { container } = render(
      <Card
        title="Test title"
        liked={false}
        onClickLike={onClickLike}
        author={"Test author"}
        date={new Date(2023, 2, 3)}
        link={"https://www.google.com"}
      />
    );

    expect(onClickLike).not.toHaveBeenCalled();

    const cardlikebtn = container.querySelector(
      ".card-likebtn button"
    ) as HTMLButtonElement | null;

    expect(cardlikebtn).not.toBe(null);
    await cardlikebtn?.click();

    expect(onClickLike).toHaveBeenCalled();
    expect(onClickLike).toHaveBeenCalledTimes(1);
  });

  it("if liked, show Heart Full Icon", () => {
    render(
      <Card
        title="Test title"
        liked={true}
        onClickLike={() => {}}
        author={"Test author"}
        date={new Date(2023, 2, 3)}
        link={"https://www.google.com"}
      />
    );

    expect(screen.getByTestId("heart-full")).toBeInTheDocument();
  });
});
