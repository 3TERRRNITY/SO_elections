import React from "react";
import "./Candidate.css";
export const Candidate = ({ name, image, desc, exp, program }) => {
  return (
    <div className="candidates-list__candidate" key={name}>
      <div className="candidate__head">
        <img className="candidate__head__image" src={image} alt={name} />
        <div className="candidate__head__text">
          <p className="candidate__head__name">{name}</p>
          <p className="candidate__head__desc">{desc}</p>
        </div>
      </div>
      <div className="candidate__experience">
        <ul>
          {Array.isArray(exp) &&
            exp.map((ex, index) => (
              <li className="" key={index}>
                {ex}
              </li>
            ))}
        </ul>
        <a
          className={`${
            !program ? "disabled" : "candidate__experience__program-a"
          }`}
          href={program == 0 ? "" : program}
          target="_blank"
          rel="noopener noreferrer"
        >
          Программа
        </a>
      </div>
    </div>
  );
};
