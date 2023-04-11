import React, { useEffect } from "react";
import "./Clubs.css";
import "./candidates.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Clubs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header text="Кандидаты на клубы" to={"/"} />
      <div className="clubs">
        <p className="clubs__text">Следите за новостями!</p>
      </div>
      <Footer />
    </>
  );
};
