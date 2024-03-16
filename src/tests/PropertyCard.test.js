import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const property = {
    title: "fake title",
    type: "fake type",
    bathrooms: "fake bathrooms",
    bedrooms: "fake bedrooms",
    price: "fake price",
    city: "fake city",
    email: "fake email",
  };

  it("render a property with the correct title", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake title").toBeInTheDocument());
  });

  it("render a property with the correct type", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake type").toBeInTheDocument());
  });

  it("render a property with the correct bathrooms", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake bathrooms").toBeInTheDocument());
  });

  it("render a property with the correct bedrooms", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake bedrooms").toBeInTheDocument());
  });

  it("render a property with the correct price", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake price").toBeInTheDocument());
  });

  it("render a property with the correct city", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake city").toBeInTheDocument());
  });

  it("render a property with the correct email", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake email").toBeInTheDocument());
  });
});
