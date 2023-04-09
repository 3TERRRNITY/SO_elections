import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./candidates.css";
import GRF from "../assets/Эмблемы факультетов/ГРФ.png";
import GF from "../assets/Эмблемы факультетов/ГФ.png";
import NGF from "../assets/Эмблемы факультетов/НГФ.png";
import SF from "../assets/Эмблемы факультетов/СФ.png";
import FPMS from "../assets/Эмблемы факультетов/ФПМС.png";
import FFGD from "../assets/Эмблемы факультетов/ФФиГД.png";
import ENF from "../assets/Эмблемы факультетов/ЭнФ.png";
import EF from "../assets/Эмблемы факультетов/ЭФ.png";
import MMF from "../assets/Эмблемы факультетов/ММФ.png";
import latyshev from "../assets/Кандидаты/СФ/Латышев.png";

function Candidates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { facultyId } = useParams();
  console.log(facultyId);
  const candidatesData = {
    GRF: [
      {
        name: "Иванов Иван Иванович",

        image: "../public/фото/Иванов.jpg",
        desc: 'Студент 3 курса, специальность "Математика и компьютерные науки"',
        experience:
          "Принимал участие в олимпиадах по математике, стажировался в Яндексе",
        program: "https://example.com/program1.pdf",
      },
      {
        name: "Петров Петр Петрович",
        image: "../public/фото/Петров.jpg",
        desc: 'Студент 4 курса, специальность "Физика"',
        experience:
          "Участник студенческой научной конференции, имеет публикации в научных журналах",
        program: "https://example.com/program2.pdf",
      },
    ],
    GF: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
    NGF: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
    SF: [
      {
        name: "Латышев Денис",
        image: latyshev,
        desc: "Маркшейдерское дело, ГГ-21-1",
        experience: [
          "Председатель строительного факультета",
          "Организатор:",
          "всех мероприятий на факультете",
          "Help Mental Health",
          "ProАктива",
        ],
        program: "https://example.com/program3.pdf",
      },
      {
        name: "Латышев Денис",
        image: latyshev,
        desc: "Маркшейдерское дело, ГГ-21-1",
        experience: ` <li>Председатель строительного факультета</li> <li>Организатор: всех мероприятий на факультете</li> <li>Help Mental Health</li> <li>ProАктива</li>`,
        program: "https://example.com/program3.pdf",
      },
    ],
    FPMS: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience: ``,
        program: "https://example.com/program3.pdf",
      },
    ],
    FFGD: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
    ENF: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
    EF: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
  };
  const headerTitle =
    facultyId == "GRF"
      ? "Геологоразведочный факультет"
      : facultyId == "GF"
      ? "Горный факультет"
      : facultyId == "NGF"
      ? "Нефтегазовый факультет"
      : facultyId == "SF"
      ? "Строительный факультет"
      : facultyId == "FPMS"
      ? "Факультет переработки минерального сырья"
      : facultyId == "FFGD"
      ? "Факультет фундаментальных и гуманитарных дисциплин"
      : facultyId == "ENF"
      ? "Энергетический факультет"
      : facultyId == "MMF"
      ? "Механико-машиностроительный"
      : "Экономический факультет";

  const headerImage =
    facultyId == "GRF"
      ? GRF
      : facultyId == "GF"
      ? GF
      : facultyId == "NGF"
      ? NGF
      : facultyId == "SF"
      ? SF
      : facultyId == "FPMS"
      ? FPMS
      : facultyId == "FFGD"
      ? FFGD
      : facultyId == "ENF"
      ? ENF
      : facultyId == "MMF"
      ? MMF
      : EF;

  const facultyCandidates = candidatesData[facultyId];
  return (
    <>
      <div className="header__candidates">
        <Link to={`../Faculties`}>
          <a className="header__link" href="">
            НАЗАД
          </a>
        </Link>

        <img className="header__candidates_image" src={headerImage} alt="" />
        <p className="header__title">{headerTitle}</p>
      </div>
      <div className="candidates-list">
        {facultyCandidates.map((candidate) => (
          <div
            className="candidates-list__candidate element-animation"
            key={candidate.id}
          >
            <div className="candidate__head">
              <img src={candidate.image} alt="Фото кандидата" />
              <div className="candidate__head__text">
                <p className="candidate__head__name">{candidate.name}</p>
                <p className="candidate__head__desc">{candidate.desc}</p>
              </div>
            </div>
            <div className="candidate__experience">
              <ul>
                {Array.isArray(candidate.experience) &&
                  candidate.experience.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
              </ul>
              <button className="candidate__experience__program-btn">
                <a href={candidate.program}>Программа</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Candidates;
