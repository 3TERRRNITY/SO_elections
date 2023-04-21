import React, { useEffect, useState } from "react";
import "./Clubs.css";
import "./candidates.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import academ from "../assets/Эмблемы клубы/По интересам/академисты.png";
import semnadcat from "../assets/Эмблемы клубы/По интересам/17-73.png";
import vneshka from "../assets/Эмблемы клубы/По интересам/Внешка.png";
import media from "../assets/Эмблемы клубы/По интересам/BELOE_BEZ_FONA_logo 1.png";
import sreda from "../assets/Эмблемы клубы/По интересам/Творческий клуб.png";
import english from "../assets/Эмблемы клубы/По интересам/LOGO_BEZ_FONA 1.png";
import volonters from "../assets/Эмблемы клубы/По интересам/Волонтерский штаб.png";
import obraz from "../assets/Эмблемы клубы/По интересам/Качеств образования.png";
import kultmass from "../assets/Эмблемы клубы/По интересам/Культмасс.png";
import gardening from "../assets/Эмблемы клубы/По интересам/Майнинг гарденинг.png";
import nastolki from "../assets/Эмблемы клубы/По интересам/Настолки.png";
import psich from "../assets/Эмблемы клубы/По интересам/Психол игры.png";
import tren from "../assets/Эмблемы клубы/По интересам/Тренинг центр.png";
import debats from "../assets/Эмблемы клубы/По интересам/дебаты в горном.png";
import metrolog from "../assets/Эмблемы клубы/Научные/Метролог.png";
import geolog from "../assets/Эмблемы клубы/Научные/image 11.png";
import archi from "../assets/Эмблемы клубы/Научные/Архитек.png";
import ecolog from "../assets/Эмблемы клубы/Научные/image 19.png";
import neft from "../assets/Эмблемы клубы/Научные/Mining the knowledge blue.png";
import miningeagles from "../assets/Эмблемы клубы/ССК _Горные ястребы_/Горные ястребы.png";

export const Clubs = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const clubsInterests = [
    { id: "academ", title: "Академисты", image: academ },
    { id: "vneshka", title: "Внешние связи", image: vneshka },
    { id: "volonters", title: "Волонтерский штаб", image: volonters },
    { id: "debats", title: "Дебаты в горном", image: debats },
    { id: "17-73", title: "17-73", image: semnadcat },
    { id: "kachobr", title: "Качество образования", image: obraz },
    { id: "english", title: "Mining English Speaking Club", image: english },
    { id: "nastolki", title: "Настольные игры в Горном", image: nastolki },
    {
      id: "kultmass",
      title: "Клуб культурно-массовых проектов",
      image: kultmass,
    },
    { id: "media", title: "Медиа Горный", image: media },
    { id: "psich", title: "Психологические игры в Горном", image: psich },
    { id: "trening", title: "Студенческий тренинг-центр", image: tren },
    { id: "gardening", title: "Mining Gardening", image: gardening },
    { id: "sreda", title: "Творческий клуб", image: sreda },
  ];
  const clubsScience = [
    { id: "metrolog", title: "Студенческий клуб Метролог", image: metrolog },
    { id: "ecolog", title: "Научное общество 'Эколог'", image: ecolog },
    { id: "neft", title: "Нефтегазовый инжиниринг", image: neft },
    { id: "geolog", title: "Геологический инжиринг", image: geolog },
    { id: "arch", title: "Архитектурный клуб 'reseARCH'", image: archi },
  ];
  const miningEagles = [
    { id: "miningEagles", title: "СКК 'Горные Ястребы'", image: miningeagles },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header text="Кандидаты на клубы" to={"/"} />
          <div className="clubs">
            <p className="clubs__title">Клубы по интересам</p>
            <div className="clubs__grid">
              {clubsInterests.map((club) => (
                <Link to={`/CandidatesClub/${club.id}`} id={club.id}>
                  <div className="club">
                    <img
                      src={club.image}
                      alt={club.title}
                      className="club__image"
                      id={club.id}
                    />
                    <label for={club.id} className="club__title">
                      {club.title}
                    </label>
                  </div>
                </Link>
              ))}
            </div>

            <p className="clubs__title">Научные клубы</p>
            <div className="clubs__grid">
              {clubsScience.map((club) => (
                <Link to={`/CandidatesClub/${club.id}`} id={club.id}>
                  <div className="club">
                    <img
                      src={club.image}
                      alt={club.title}
                      id={club.id}
                      className="club__image"
                    />
                    <label for={club.id} className="club__title">
                      {club.title}
                    </label>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <p className="clubs__title">СКК "Горные Ястребы"</p>
          <div className="clubs__grid">
            {miningEagles.map((club) => (
              <Link to={`/CandidatesClub/${club.id}`} id={club.id}>
                <div className="club">
                  <img
                    src={club.image}
                    alt={club.title}
                    id={club.id}
                    className="club__image"
                  />
                  <label for={club.id} className="club__title">
                    {club.title}
                  </label>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
