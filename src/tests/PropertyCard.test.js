import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const property = {
    title: "fake-title",
    type: "fake-type",
    bathrooms: "fake-bathrooms",
    bedrooms: "fake-bedrooms",
    price: "fake-price",
    city: "fake-city",
    email: "fake-email",
  };

  it("render a property with the correct title", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("fake-title")).toBeInTheDocument();
  });

  it("render a property with the correct type", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Type: fake-type")).toBeInTheDocument();
  });

  it("render a property with the correct bathrooms", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Bathrooms: fake-bathrooms")).toBeInTheDocument();
  });

  it("render a property with the correct bedrooms", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Bedrooms: fake-bedrooms")).toBeInTheDocument();
  });

  it("render a property with the correct price", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Price: fake-price")).toBeInTheDocument();
  });

  it("render a property with the correct city", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("City: fake-city")).toBeInTheDocument();
  });

  it("render a property with the correct email", () => {
    const { getByText } = render(<PropertyCard {...property} />);
    expect(getByText("Email: fake-email")).toBeInTheDocument();
  });
});
