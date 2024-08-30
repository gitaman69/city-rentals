import React from "react";
import '../PreLoader1/preloader.scss'

const PreLoader = () => {
  return (
    <>
      <div id="loop" className="center" />
      <div id="bike-wrapper" className="center">
        <div id="bike" className="centerBike" />
      </div>
    </>
  );
};

export default PreLoader;