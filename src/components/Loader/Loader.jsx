import React, { useEffect } from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="loader__text">Идет загрузка...</p>
    </div>
  );
};

export default Loader;
