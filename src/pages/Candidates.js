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
import lizad from "../assets/Кандидаты/СФ/Дьячкова.png";
import danis from "../assets/Кандидаты/СФ/Муллабаев.png";
import shcedrov from "../assets/Кандидаты/СФ/Щедров.png";
import bugay from "../assets/Кандидаты/СФ/Щедров2.png";
import alexandrova from "../assets/Кандидаты/ММФ/Александрова.png";
import hvorostyanova from "../assets/Кандидаты/ГРФ/Хворостяная.png";
import yaitskiy from "../assets/Кандидаты/ГРФ/Яицкий.png";
import barkhatov from "../assets/Кандидаты/ГФ/Бархатов.png";
import emil from "../assets/Кандидаты/НГФ/Зейналов.png";
import milan from "../assets/Кандидаты/НГФ/Алашлаев.png";
import efimova from "../assets/Кандидаты/ФПМС/Ефимова.png";
import stepan from "../assets/Кандидаты/FFGD/image 35.png";
import pavel from "../assets/Кандидаты/ЭнФ/image 33.png";
import nikita from "../assets/Кандидаты/ЭФ/Никита фото.png";

function Candidates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { facultyId } = useParams();
  console.log(facultyId);
  const candidatesData = {
    GRF: [
      {
        name: "Хворостяная Елена",
        image: hvorostyanova,
        desc: 'Студент 3 курса, специальность "Математика и компьютерные науки"',
        experience: [
          "Я студентка 3 курса, принимаю активное участие в жизни университета. Была организатором многих мероприятий как на факультете, так и в университете.Очень люблю свой факультет, болею за него душой и хочу привнести свой вклад в его жизнь!",
        ],
        program:
          "https://vk.com/doc203201142_656694817?hash=ypzJ2QmX9CYJbfs1Ex9a3jMprr69cUvGKVjD9psRUis&dl=rhMJMQRQij4l3vuWKCS7uY5VP6z9Ekv2UxPBWSTZxgT",
        disabled: false,
      },
      {
        name: "Яицкий Евгений",
        image: yaitskiy,
        desc: "Геология нефти и газа, ГНГ-20",
        experience: [
          "- Организатор множества мероприятий, действующий руководитель ГРФ, а также студенческого института наставничества! Помимо этого просто хороший человек и активист с опытом.",
        ],

        program:
          "https://vk.com/doc203201142_656697442?hash=dHfRxz4aFJJIbOH9nksfBZjM0M6SzwNRvVVjWIBJ4mH&dl=SqoPzGzrP4lH3odZMtt83oet08FeUu9QYLahzCteWyX",
        disabled: false,
      },
    ],
    GF: [
      {
        name: "Бархатов Сергей",
        image: barkhatov,
        desc: "Открытые горные работы, ТО-19",
        experience: [
          "- Один из старичков актива горного факультета и председатель научного направления.",
        ],
        program: "",
        disabled: false,
      },
    ],
    NGF: [
      {
        name: "Зейналов Эмиль",
        image: emil,
        desc: "Нефтегазовое дело, ГРП-19",
        experience: [
          "Председатель НГФ 2022 - 2023. За год нам удалось создать команду, которая сегодня задает уровень работы другим общественным объединениям. Коллектив нефтегаза сегодня это передовой механизм с невероятным уровнем эффективности и объединенности. (тьфу-тьфу не сглазит",
        ],
        program: "",
        disabled: false,
      },
      {
        name: "Алашпаев Милан",
        image: milan,
        desc: "Нефтегазовое дело, СТ-21",
        experience: [
          "С самого поступления начал заниматься активностями: участвовал в Кубке Первокурсников, Танцах в Горном, Неделях факультетов;",
          "был волонтером на мероприятиях;",
          "организатором;",
          "член Института наставничества;",
          "прошел отбор на ProАктив",
          "А сейчас хочу заняться чем-то большим и занять эту должность.",
        ],
        program: "",
        disabled: false,
      },
    ],
    SF: [
      {
        name: "Латышев Денис",
        image: latyshev,
        desc: "Маркшейдерское дело, ГГ-21-1",
        experience: [
          "- Председатель строительного факультета",
          "- Организатор:",
          "- всех мероприятий на факультете",
          "- Help Mental Health",
          "- ProАктива",
        ],
        program:
          "https://vk.com/doc203201142_656692912?hash=CgHkLHzjYLe4bdfXpiV6GEePcVtNCBZe1PnxWRe2dR8&dl=zZzIAJ6MrpqSYMJEQ1QqYTWRZ9ZVkeaHup0ShxHjpc4",
        disabled: false,
      },
      {
        name: "Дьячкова Елизавета",
        image: lizad,
        desc: "Архитектура, АГС-22-2",
        experience: [
          "– Активный человек, наверное, во всем, начиная со спорта, заканчивая общением с людьми.",
          "– Состою в сборной команде по СБТ, иногда выхожу на волонтерство и донорство.",
          "– Готова помогать развитию своего любимого факультета.",
        ],
        program:
          "https://vk.com/doc203201142_656691050?hash=tS8DvOl6iaj3VI6GMHJctXLHAQP8iF7ZCH4R40ng3Ms&dl=BuSrbdOVvR1dDv6YPZEvw64ootIpHpXzqRUjhZSeS50",
        disabled: false,
      },
      {
        name: "Муллабаев Данис",
        image: danis,
        desc: "Маркшейдерское дело, ГГ-21-1",
        experience: [
          "– Изучаю машинное обучение, увлекаюсь футболом и хоккеем.",
          "– В школе создал команду КВН и дошли до 1/4 финала Юниор-Лиги Республики Башкортостан.",
          "– Был организатором Halloween и Нового года в школе и у своих родителей.",
          "– 2 место в инженерном кейсе MetalCup.",
        ],
        program:
          "https://vk.com/doc203201142_656693346?hash=3JFAYx3f8mqk1cZQMvRrucEzAzYMV26pDtfyUELyqb8&dl=V0F7egDmb7tSy6jgjU9atZKCBr97vzBs5awTswBkKz0",
        disabled: false,
      },
      {
        name: "Щедров Михаил",
        image: shcedrov,
        desc: "Промышленное и гражданское строительство, ПГС-22",
        experience: [
          "– Староста группы ПГС-22, заместитель председателя совета старост факультета.",
          "– Один из организаторов последнего звонка.",
          "– Входил в «Совет гимназистов» в школе.",
          "– Активист, волонтер, вместе с командой победил на КП 2022, участвовал в ША, обучаюсь в Институте Наставничества и в ШО, член команды на неделях факультета.",
        ],
        program:
          "https://vk.com/doc203201142_656693016?hash=z4lgwVKUHiwRcG02XMuTdr4l2ZtmTCBkMcQ7N56HfCo&dl=UlYmAG3pztUiSriLzp44uJG9vtSdLTS396bXDfSQSRX",
        disabled: false,
      },
      {
        name: "Бугай Артем",
        image: bugay,
        desc: "Инженерная геодезия, ИГ-22-2",
        experience: [
          "– петербуржец",
          "– первокурсник",
          "– вроде умный",
          "– наверное, смешной",
        ],
        program:
          "https://vk.com/doc203201142_656693293?hash=kQxWAzM1q2zyv3DzVhzulSQ5Hc7rzJkPBewaxWbQFVs&dl=luAYW70hPw7OYtiKFVnJNSuXZlRE2WMZEEJxpNxokss",
        disabled: false,
      },
    ],
    FPMS: [
      {
        name: "Ефимова Милада",
        image: "",
        desc: "Металлургия цветных металлов, МЦ-21-2",
        experience: [
          "Очень хочу помочь студентам в развитии нашего университета с точки зрения студенческого самоуправления, поэтому я здесь!",
        ],
        program: "",
        disabled: false,
      },
    ],
    FFGD: [
      {
        name: "Калимуллин Степан",
        image: "",
        desc: "Информатика и вычислительная техника, ИАС-21-2",
        experience: [
          "О себе могу сказать, что я трудолюбив, внимателен, организован, эффективно решаю поставленные задачи. Увлечения у меня чисто женские — люблю рукоделие: вяжу, шью, вышиваю. Выдвигаю свою кандидатуру в связи с грядущим повышением нынешнего шефа.",
        ],
        program: "",
        disabled: false,
      },
    ],
    ENF: [],
    EF: [],
    MMF: [
      {
        name: "Александрова Елизавета",
        image: alexandrova,
        desc: "Машиностроение, ТОА-21",
        experience: [
          "- Я активистка своего факультета и организатор мероприятий на факультете и в университете. Люблю общественную деятельность и все, что с ней связано",
        ],
        program:
          "https://vk.com/doc203201142_656693620?hash=KFhzry8sjWQpnz5UGzN8BzA6YZcBjS7CSzUtS1iyauP&dl=o3pENwwzSziJtZrpbEPjHZa97a4qdJJuXGVnKQG951w",
        disabled: false,
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
  const bgcolor =
    facultyId == "GRF"
      ? "grf"
      : facultyId == "GF"
      ? "gf"
      : facultyId == "NGF"
      ? "ngf"
      : facultyId == "SF"
      ? "sf"
      : facultyId == "FPMS"
      ? "fpms"
      : facultyId == "FFGD"
      ? "ffgd"
      : facultyId == "ENF"
      ? "enf"
      : facultyId == "MMF"
      ? "mmf"
      : "ef";

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
      <div className={`candidates-list ${bgcolor}`}>
        {facultyCandidates.map((candidate) => (
          <div className="candidates-list__candidate" key={candidate.id}>
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
              <button
                className="candidate__experience__program-btn"
                disabled={candidate.disabled}
              >
                <a
                  href={candidate.program}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Программа
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Candidates;
