import React from "react";
import "./faculties.css";
import { Link } from "react-router-dom";

function Faculties() {
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
            <img src="../assets/Эмблемы факультетов/ГРФ.png" alt="ГРФ" />
          </div>
        </Link>
        <Link to="/candidates/GF">
          <div className="faculty" id="GF">
            <img src="../assets/Эмблемы факультетов/ГФ.png" alt="ГФ" />
          </div>
        </Link>
        <Link to="/candidates/NGF">
          <div className="faculty" id="NGF">
            <img src="../assets/Эмблемы факультетов/НГФ.png" alt="НГФ" />
          </div>
        </Link>
        <Link to="/candidates/SF">
          <div className="faculty" id="SF">
            <img src="../assets/Эмблемы факультетов/СФ.png" alt="СФ" />
          </div>
        </Link>
        <Link to="/candidates/FPMS">
          <div className="faculty" id="FPMS">
            <img src="../assets/Эмблемы факультетов/ФПМС.png" alt="ФПМС" />
          </div>
        </Link>
        <Link to="/candidates/FFGD">
          <div className="faculty" id="FFGD">
            <img src="../assets/Эмблемы факультетов/ФФиГД.png" alt="ФФиГД" />
          </div>
        </Link>
        <Link to="/candidates/ENF">
          <div className="faculty" id="ENF">
            <img src="../assets/Эмблемы факультетов/ЭнФ.png" alt="ЭНФ" />
          </div>
        </Link>
        <Link to="/candidates/EF">
          <div className="faculty" id="EF">
            <img src="../assets/Эмблемы факультетов/ЭФ.png" alt="ЭФ" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Faculties;
