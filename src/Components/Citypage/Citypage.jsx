import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Citypage/citypage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import PreLoader from "../PreLoader1/PreLoader";

const Citypage = ({ searchQuery }) => {
  const { cityName } = useParams();
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [dataLoaded, setDataLoaded] = useState(false); // New state to track data loading
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchRentals = async () => {
      if (searchQuery && searchQuery.length !== 6) {
        setLoading(false); // Stop loading if searchQuery length is incorrect
        return;
      }
      
      try {
        // Replace `http://localhost:5000` with the actual URL of your backend server
        const backendUrl = "https://backend-server-orcin.vercel.app"; // Adjust this as needed

        // Construct the API endpoint based on searchQuery
        const url = searchQuery
          ? `${backendUrl}/api/rentals/${cityName}/${searchQuery}`
          : `${backendUrl}/api/rentals/${cityName}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
        setRentals(data);
        // setDataLoaded(true); // Data has been loaded
        setLoading(false);
      } catch (err) {
        setError(err);
        // setDataLoaded(true); // Data has been loaded, but with error
      }
    };

    fetchRentals();

    // Timer to stop preloader after 5 seconds
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 500);

    // return () => clearTimeout(timer);

  }, [cityName, searchQuery]);

  if (loading) return <PreLoader />; // Show preloader while loading

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="overview">
        <h1>{cityName.replace(/-/g, " ").toUpperCase()}</h1>
        <p>Details about {cityName.replace(/-/g, " ")}</p>
      </div>
      <div className="rental-items" data-aos="fade-up">
        {rentals.length > 0 ? (
          <ul className="rental-lists">
            {rentals.map((item) => (
              <li key={item.ID}>
                <div
                  className="list-items"
                  style={{
                    backgroundImage: `url(${item.Image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                  }}
                >
                  <h2 className="items">{item.Name_of_Place}</h2>
                  <p className="items">Price: {item.Price}</p>
                  <p className="items contact">
                    Contact: {item.Contact}
                    <a
                      href={`https://wa.me/+91${item.Contact}`}
                      className="hover-link"
                    >
                      Contact on WhatsApp
                    </a>
                  </p>
                  <p className="items">Address: {item.Address}</p>
                  <p className="items">Pincode: {item.Pincode}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No information available. </h2>
        )}
      </div>
    </div>
  );
};

export default Citypage;
