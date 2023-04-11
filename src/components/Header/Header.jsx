import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ text, children, to }) => {
  return (
    <div className="header__faculties">
      <Link className="header__link" to={to}>
        НАЗАД
      </Link>
      {children}
      <p className="header__title">{text}</p>
    </div>
  );
};
