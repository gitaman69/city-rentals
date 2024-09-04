import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "../Citypage/citypage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import PreLoader from "../PreLoader1/PreLoader";

const Citypage = ({ searchQuery }) => {
  const { cityName } = useParams();
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchRentals = async () => {
      if (searchQuery && searchQuery.length !== 6) {
        setLoading(false);
        return;
      }
      
      try {
        const backendUrl = "https://backend-server-orcin.vercel.app";
        const url = searchQuery
          ? `${backendUrl}/api/rentals/${cityName}/${searchQuery}`
          : `${backendUrl}/api/rentals/${cityName}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        setRentals(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRentals();
  }, [cityName, searchQuery]);

  if (loading) return <PreLoader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="overview">
        <h1>{cityName.replace(/-/g, " ").toUpperCase()}</h1>
        <p>Details about {cityName.replace(/-/g, " ").toUpperCase()}</p>
      </div>
      <div className="rental-items" data-aos="fade-up">
        {rentals.length > 0 ? (
          <ul className="rental-lists">
            {rentals.map((item) => (
              <RentalItem key={item.ID} item={item} />
            ))}
          </ul>
        ) : (
          <h2>No information available.</h2>
        )}
      </div>
    </div>
  );
};

const RentalItem = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Load the content only once when in view
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });

  return (
    <li ref={ref}>
      {inView && (
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
            <a href={`https://wa.me/+91${item.Contact}`} className="hover-link">
              Contact Now
            </a>
          </p>
          <p className="items">Address: {item.Address}</p>
          <p className="items">Pincode: {item.Pincode}</p>
        </div>
      )}
    </li>
  );
};

export default Citypage;
