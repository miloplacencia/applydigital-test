import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navigation from "../../src/components/navigation/navigation";

describe("Navigation", () => {
  it("should render the navigation", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/" }, { pathname: "/favorite" }]}
      >
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("My faves")).toBeInTheDocument();
  });

  it("If root active, should change class", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <Navigation />
      </MemoryRouter>
    );

    const link = screen.getByText("All");
    expect(link).toHaveClass("active");
  });

  it("If /favorites active, should change class", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/favorites" }]}>
        <Navigation />
      </MemoryRouter>
    );

    const linkRoot = screen.getByText("All");
    const link = screen.getByText("My faves");
    expect(link).toHaveClass("active");
    expect(linkRoot).not.toHaveClass("active");
  });
});
