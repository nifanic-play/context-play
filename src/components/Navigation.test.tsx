import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { getElementsByLabel, LABEL, Navigation, ViewShape } from "./Navigation";

describe("getElementsByLabel()", () => {
  test("returns elements of TEAM label.", () => {
    const { TEAM } = LABEL;
    const teamElements = getElementsByLabel(TEAM);
    const output: ViewShape[] = [
      { to: "/amir", label: "Amir" },
      { to: "/nick", label: "Nick" },
    ];

    expect(teamElements).toStrictEqual(output);
  });

  test("throws an error if no params provided.", () => {
    expect(getElementsByLabel).toThrow();
  });
});

describe("hierarchy()", () => {
  test("renders correctly nested `ol` navigation elements.", () => {
    const input = renderer
      .create(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      )
      .toJSON();

    expect(input).toMatchSnapshot();
  });
});
