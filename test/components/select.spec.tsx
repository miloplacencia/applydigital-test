import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Select from "../../src/components/select/select";

describe("Select component", () => {
  const options = [
    { value: "angular", label: "Option 1" },
    { value: "reactjs", label: "Option 2" },
    { value: "vuejs", label: "Option 3" },
  ] as const;

  it("Should render select correctly", () => {
    const { container } = render(
      <Select options={options} onChange={() => {}} />
    );

    const select = container.querySelector(".select-container");
    expect(select).not.toBe(null);
    expect(select?.children.length).toBe(2);

    const button = select?.children[0];
    expect(button).not.toBe(null);
    const buttonLabel = button?.children[0].children[0].textContent;
    expect(buttonLabel).toBe("Select your news");

    const ul = select?.children[1];
    expect(ul).not.toBe(null);
    expect(ul?.children.length).toBe(3);
    expect(ul?.className).not.toBe("active");

    Array.from(ul?.children || []).forEach((li, i) => {
      expect(li).not.toBe(null);
      expect(li?.textContent).toBe(options[i].label);
      const svg = li.querySelector(`svg[aria-testid=${options[i].value}]`);
      expect(svg).not.toBe(null);
    });
  });

  it("Should render select with active option", () => {
    const { container } = render(
      <Select options={options} onChange={() => {}} value={options[1].value} />
    );

    expect(
      container.querySelector(".select-container button span span")?.textContent
    ).toBe(options[1].label);
  });

  it("On click item should emit event", async () => {
    const onChange = vi.fn();
    const { container } = render(
      <Select options={options} onChange={onChange} value={options[1].value} />
    );

    expect(onChange).not.toBeCalled();

    const select = container.querySelector(".select-container");
    const ul = select?.children[1];
    const li = ul?.children[0];
    const button = li?.children[0] as HTMLButtonElement;

    await button?.click();

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(options[0].value);
  });
});
