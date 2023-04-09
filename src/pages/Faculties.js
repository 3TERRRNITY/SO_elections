import React, { useEffect } from "react";
import "./faculties.css";
import { Link } from "react-router-dom";
import GRF from "../assets/Эмблемы факультетов/ГРФ.png";
import GF from "../assets/Эмблемы факультетов/ГФ.png";
import NGF from "../assets/Эмблемы факультетов/НГФ.png";
import SF from "../assets/Эмблемы факультетов/СФ.png";
import FPMS from "../assets/Эмблемы факультетов/ФПМС.png";
import FFGD from "../assets/Эмблемы факультетов/ФФиГД.png";
import ENF from "../assets/Эмблемы факультетов/ЭнФ.png";
import EF from "../assets/Эмблемы факультетов/ЭФ.png";
import MMF from "../assets/Эмблемы факультетов/ММФ.png";

function Faculties() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header__faculties">
        <Link className="header__link" to="/">
          НАЗАД
        </Link>
        <p className="header__title">Кандидаты на факультетах</p>
      </div>
      <div className="faculties">
        <Link to="/candidates/GRF">
          <div className="faculty" id="GRF">
            <img src={GRF} alt="ГРФ" />
          </div>
        </Link>
        <Link to="/candidates/GF">
          <div className="faculty" id="GF">
            <img src={GF} alt="ГФ" />
          </div>
        </Link>
        <Link to="/candidates/NGF">
          <div className="faculty" id="NGF">
            <img src={NGF} alt="НГФ" />
          </div>
        </Link>
        <Link to="/candidates/SF">
          <div className="faculty" id="SF">
            <img src={SF} alt="СФ" />
          </div>
        </Link>
        <Link to="/candidates/FPMS">
          <div className="faculty" id="FPMS">
            <img src={FPMS} alt="ФПМС" />
          </div>
        </Link>
        <Link to="/candidates/FFGD">
          <div className="faculty" id="FFGD">
            <img src={FFGD} alt="ФФиГД" />
          </div>
        </Link>
        <Link to="/candidates/ENF">
          <div className="faculty" id="ENF">
            <img src={ENF} alt="ЭНФ" />
          </div>
        </Link>
        <Link to="/candidates/EF">
          <div className="faculty" id="EF">
            <img src={EF} alt="ЭФ" />
          </div>
        </Link>
        <Link to="/candidates/MMF">
          <div className="faculty" id="MMF">
            <img src={MMF} alt="ММФ" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Faculties;
