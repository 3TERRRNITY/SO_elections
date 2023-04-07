import React from "react";
import { Link, useParams } from "react-router-dom";
import "./candidates.css";

function Candidates() {
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
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
        program: "https://example.com/program3.pdf",
      },
    ],
    FPMS: [
      {
        name: "Сидорова Анна Игоревна",
        image: "",
        desc: 'Студентка 2 курса, специальность "Химия"',
        experience:
          "Проходила практику в лаборатории, победительница олимпиады по химии",
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

  const facultyCandidates = candidatesData[facultyId];
  return (
    <>
      <div className="header__candidates">
        <Link to={`../Faculties`}>
          <a className="header__link" href="">
            НАЗАД
          </a>
        </Link>

        <p className="header__title">Кандидаты факультета</p>
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
                <li>{candidate.experience}</li>
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
