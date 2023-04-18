import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./candidates.css";
import { Header } from "../components/Header/Header";
import GRF from "../assets/Эмблемы факультетов/ГРФ.png";
import GF from "../assets/Эмблемы факультетов/ГФ.png";
import NGF from "../assets/Эмблемы факультетов/НГФ.png";
import SF from "../assets/Эмблемы факультетов/СФ.png";
import FPMS from "../assets/Эмблемы факультетов/ФПМС.png";
import FFGD from "../assets/Эмблемы факультетов/ФФиГД.png";
import ENF from "../assets/Эмблемы факультетов/ЭнФ.png";
import EF from "../assets/Эмблемы факультетов/ЭФ.png";
import MMF from "../assets/Эмблемы факультетов/ММФ.png";
import academ from "../assets/Эмблемы клубы/По интересам/академисты.png";
import semnadcat from "../assets/Эмблемы клубы/По интересам/17-73.png";
import vneshka from "../assets/Эмблемы клубы/По интересам/Внешка.png";
import media from "../assets/Эмблемы клубы/По интересам/BELOE_BEZ_FONA_logo 1.png";
import sreda from "../assets/Эмблемы клубы/По интересам/Jq9rHFK8I5w 1.png";
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
import archi from "../assets/Эмблемы клубы/Научные/image 12.png";
import ecolog from "../assets/Эмблемы клубы/Научные/image 19.png";
import neft from "../assets/Эмблемы клубы/Научные/Mining the knowledge blue.png";
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
import kachur from "../assets/Кандидаты/ЭнФ/image 38.png";
import { Candidate } from "../components/Candidate/Candidate";
import anna from "../assets/Кандидаты/Внешека/IMG_2960 1.png";

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
        desc: "Прикладная геология, РМ-20",
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
          "Организатор множества мероприятий, действующий руководитель ГРФ, а также студенческого института наставничества! Помимо этого просто хороший человек и активист с опытом.",
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
          "Один из старичков актива горного факультета и председатель научного направления.",
        ],
        program:
          "https://vk.com/doc21793857_657520856?hash=uNSatSfZaLiephz5nnLTpz9TQqhSiRuS261xvmJUdyL&dl=ugHaz0IBJKhnwGZuBe8NizxM4uxRiY11k8H4P7V7PcD",
        disabled: false,
      },
    ],
    NGF: [
      {
        name: "Зейналов Эмиль",
        image: emil,
        desc: "Нефтегазовое дело, ГРП-19",
        experience: [
          "Председатель НГФ 2022 - 2023. За год нам удалось создать команду, которая сегодня задает уровень работы другим общественным объединениям. Коллектив нефтегаза сегодня это передовой механизм с невероятным уровнем эффективности и объединенности. (тьфу-тьфу не сглазить)",
        ],
        program:
          "https://vk.com/doc203201142_656894130?hash=Wp7iLLyuzNy7Vges0aLEs8f9OS2YLDkNt8ijSpKMWQk&dl=bmOMq2v3uJc8R8gpNx18KLiec2nohf32uSQGLyVWnWH",
        disabled: false,
      },
      {
        name: "Алашпаев Милан",
        image: milan,
        desc: "Нефтегазовое дело, СТ-21",
        experience: [
          "С самого поступления начал заниматься активностями:",
          "- участвовал в Кубке Первокурсников, Танцах в Горном, Неделях факультетов;",
          "- был волонтером на мероприятиях;",
          "- организатором;",
          "- член Института наставничества;",
          "- прошел отбор на ProАктив",
          "А сейчас хочу заняться чем-то большим и занять эту должность.",
        ],
        program:
          "https://vk.com/doc203201142_656839293?hash=At94fxZRqvAVtRHK9qmJlW8skyz3nLmkV1sUfe9W5WH&dl=AB5nnC1iA7FjPNBFzK5pmjIqz0ejbiS2qy1QUj6Lrac",
        disabled: false,
      },
    ],
    SF: [
      {
        name: "Латышев Денис",
        image: latyshev,
        desc: "Маркшейдерское дело, ГГ-21-1",
        experience: [
          "1. Председатель строительного факультета",
          "2. Организатор:",
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
        image: efimova,
        desc: "Металлургия цветных металлов, МЦ-21-2",
        experience: [
          "Очень хочу помочь студентам в развитии нашего университета с точки зрения студенческого самоуправления, поэтому я здесь!",
        ],
        program:
          "https://vk.com/doc203201142_656701733?hash=zEIU8xmaLe4yEmZvmlryDWC6qknJ4jWMjfXIMp2gzCP&dl=5GWyamLLYZUDkxY3EksCC40qSx8kaoz32zunNnL0to4",
        disabled: false,
      },
    ],
    FFGD: [
      {
        name: "Калимуллин Степан",
        image: stepan,
        desc: "Информатика и вычислительная техника, ИАС-21-2",
        experience: [
          "О себе могу сказать, что я трудолюбив, внимателен, организован, эффективно решаю поставленные задачи. Увлечения у меня чисто женские — люблю рукоделие: вяжу, шью, вышиваю. Выдвигаю свою кандидатуру в связи с грядущим повышением нынешнего шефа.",
        ],
        program:
          "https://vk.com/doc203201142_656839287?hash=JcMLYTs7bU3sEVSTDUYp2KDkc5t1225ASukiYyfVtq4&dl=maTwqijyK3zORaU3plZlyzwZZBNW9fa84PPNA5DoqGL",
        disabled: false,
      },
    ],
    ENF: [
      {
        name: "Предтеченский Павел",
        image: pavel,
        desc: "Теплоэнергетика, ТЭ-21",
        experience: [
          "Наставник группы ТЭ-22. Организатор, волонтер и участник множества мероприятий на факультете. В данный момент являюсь капитаном факультета на Неделях факультетов и заместителем председателя Энергетического факультета. Имеется опыт присутствия на собраниях Совета факультета, Ученого совета, Совета обучающихся и др.",
        ],
        program:
          "https://vk.com/doc134792419_661278963?hash=wLPRMWlpdiY2Ep73xuXtZobZMkIAPOOVarQqc9VBuw0&dl=0VBoQlrOO69FaWCzGGtcHMehCT5xKNYd3NdyhbldHsL",
        disabled: false,
      },
      {
        name: "Качур Владислав",
        image: kachur,
        desc: "Промышленная электронника, ПЭ-20",
        experience: [],
        program: 0,
        disabled: true,
      },
    ],
    EF: [
      {
        name: "Мартынов Никита",
        image: nikita,
        desc: "Экономика, ЭГ-22-1",
        experience: [
          "Несколько фактов обо мне:",
          "- Староста группы ЭГ-22-1",
          "- Участник актива факультета",
          "- Соорганизатор многих мероприятий факультета",
          "- Могу найти подход к каждому",
          "- Умею организовывать и мотивировать людей к работе",
          "- Полон идей и желания работать на благо родного факультета",
        ],
        program:
          "https://vk.com/doc203201142_656701260?hash=lbJYS1zT4OsQtXJYIngimNBgjJyeEsBf0MMy2uDv0jX&dl=5JiX2L8m34Irp8z7meec7z9twbn5DqUPlRy7SZHxWKc",
        disabled: false,
      },
    ],
    MMF: [
      {
        name: "Александрова Елизавета",
        image: alexandrova,
        desc: "Машиностроение, ТОА-21",
        experience: [
          "Я активистка своего факультета и организатор мероприятий на факультете и в университете. Люблю общественную деятельность и все, что с ней связано",
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
      <Header text={headerTitle} to={`../Faculties`}>
        <img className="header__candidates_image" src={headerImage} alt="" />
      </Header>
      <div className={`candidates-list ${bgcolor}`}>
        {facultyCandidates.map((candidate) => (
          <Candidate
            name={candidate.name}
            image={candidate.image}
            desc={candidate.desc}
            exp={candidate.experience}
            program={candidate.program}
          />
        ))}
      </div>
    </>
  );
}

export default Candidates;
