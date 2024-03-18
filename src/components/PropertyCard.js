import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
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
        <p className="property-card__type">
          {type} - {city}
        </p>
        <p className="property-card__info">
          <span>
            <FontAwesomeIcon icon={faBath} />
            Bathrooms: {bathrooms}
          </span>
          <span>
            <FontAwesomeIcon icon={faBed} />
            Bedrooms: {bedrooms}
          </span>
          <span>
            <FontAwesomeIcon icon={faSterlingSign} />
            Price: {price}
          </span>
        </p>
        <p className="property-card__email">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${email}`}>Email</a>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
