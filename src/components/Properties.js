import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/PropertyListing")
      .then(({ data }) => setProperties(data))
      .catch((error) => {
        console.error("Error fetching property listings", error);
        setAlert({
          message: "Error fetching property listings. Please try again later.",
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div className="properties">
      <SideBar className="sidebar" />
      {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
      )}
      <div className="property-card-grid">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
