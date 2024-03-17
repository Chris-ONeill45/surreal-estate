import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faMap,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div>
        <h3 className="property-card__title">{title}</h3>
        <p className="property-card__type">Type: {type}</p>
        <p className="property-card__city">
          <FontAwesomeIcon icon={faMap} />
          City: {city}
        </p>
        <p className="property-card__bathrooms">
          <FontAwesomeIcon icon={faBath} />
          Bathrooms: {bathrooms}
        </p>
        <p className="property-card__bedrooms">
          <FontAwesomeIcon icon={faBed} />
          Bedrooms: {bedrooms}
        </p>
        <p className="property-card__price">
          <FontAwesomeIcon icon={faSterlingSign} />
          Price: {price}
        </p>
        <p className="property-card__email">
          <FontAwesomeIcon icon={faEnvelope} />
          Email: {email}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
