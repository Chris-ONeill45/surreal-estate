import React from "react";

const PropertyCard = (title, type, bathrooms, bedrooms, price, city, email) => {
  return (
    <div className="property-card">
      <h2 className="property-card__title">{title}</h2>
      <p className="property-card__type">Type: {type}</p>
      <p className="property-card__bathrooms">Bathrooms: {bathrooms}</p>
      <p className="property-card__bedrooms">Bedrooms: {bedrooms}</p>
      <p className="property-card__price">Price: {price}</p>
      <p className="property-card__city">City: {city}</p>
      <p className="property-card__email">Email: {email}</p>
    </div>
  );
};

export default PropertyCard;
