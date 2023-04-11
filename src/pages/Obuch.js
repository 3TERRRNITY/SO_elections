import React, { useEffect } from "react";
import "./ooo.css";
import "./candidates.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer.jsx";

export const Obuch = () => {
  const hrefs = [
    {
      name: "Спортивные клубы",
      href: "https://forms.gle/iU9wY3DBuoQPXJAi8",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header text="Кандидаты на ООО" to="/" />
      <div className="ooo">
        <p className="obuch__text">Сбор заявок еще идет!</p>
        {hrefs.map((el) => (
          <div className="obuch">
            <p className="obuch__text__card">{el.name}</p>
            <a
              className="obuch__collect-form"
              href={el.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Успей подать заяку!
            </a>
          </div>
        ))}
        <p className="obuch__add">Список будет пополняться</p>
      </div>
      <Footer />
    </>
  );
};
