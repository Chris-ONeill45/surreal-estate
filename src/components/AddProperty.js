import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:5000/api/v1/PropertyListing", fields)
      .then((response) => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
        console.log("Property added successfully", response.data);
      })
      .catch((error) => {
        setAlert({
          message: "Server, error. Please try again",
          isSuccess: false,
        });
        console.error("Error, please try again", error.response.data);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add Property Page
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <label className="input-field" htmlFor="title">
          Description
          <input
            id="title"
            name="title"
            placeholder="Enter description"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <label className="input-field" htmlFor="city">
          City
          <select
            className="input-box"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label className="input-field" htmlFor="type">
          Type
          <select
            className="input-box"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label className="input-field" htmlFor="bedrooms">
          Bedrooms
          <input
            className="input-box"
            id="bedrooms"
            name="bedrooms"
            placeholder="Number of bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label className="input-field" htmlFor="bathrooms">
          Bathrooms
          <input
            className="input-box"
            id="bathrooms"
            name="bathrooms"
            placeholder="Number of bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label className="input-field" htmlFor="price">
          Price
          <input
            className="input-box"
            id="price"
            name="price"
            placeholder="Enter property price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label className="input-field" htmlFor="email">
          Email
          <input
            className="input-box"
            id="email"
            name="email"
            placeholder="john.smith@email.co.uk"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button className="submit-button" type="submit">
          Add Property
        </button>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperty;
