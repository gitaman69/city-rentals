import React, { useState,useEffect } from "react";
import "./listing.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ListingForm = () => {

    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    contact: "",
    address: "",
    pincode: "",
    city: "", // Added city field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://server-two-livid.vercel.app/api/pending-listings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Your listing has been submitted for approval.");
        setFormData({
          name: "",
          price: "",
          contact: "",
          address: "",
          pincode: "",
          city: "",
        }); // Clear the form after submission
      } else {
        alert("Failed to submit listing.");
      }
    } catch (error) {
      console.error("Error submitting listing:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" data-aos="fade-up">
        <div className="heading">
            <h2 className="heading-text">List your Space</h2>
        </div>
      <div className="name">
        <div className="name-text">Name of place:</div>
        <div className="name-input">
          <input
            type="text"
            name="name"
            placeholder="Name of Place"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="price">
        <div className="price-text">Price:</div>
        <div className="price-input">
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="contact">
        <div className="contact-text">Enter Contact Info:</div>
        <div className="contact-input">
          <input
            type="text"
            name="contact"
            placeholder="Contact Info"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="address">
        <div className="address-text">Enter Address:</div>
        <div className="address-input">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="pincode">
        <div className="pincode-text">Enter Pincode:</div>
        <div className="pincode-input">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="city">
        <div className="city-text">Enter City Name:</div>
        <div className="city-input">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="btn">
        <button type="submit" className="submit-btn">Submit Listing</button>
      </div>
    </form>
  );
};

export default ListingForm;
