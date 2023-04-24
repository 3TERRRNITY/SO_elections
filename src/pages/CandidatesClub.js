import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./candidates.css";
import { Header } from "../components/Header/Header";
import { Candidate } from "../components/Candidate/Candidate";
import Anna from "../assets/Кандидаты/Внешека/IMG_2960 1.png";
import Archi from "../assets/Кандидаты/Архитектура/image 39.png";
import Ecolog from "../assets/Кандидаты/Эколог/image 41.png";
import Semnad from "../assets/Кандидаты/17-73/image 40.png";
import Volonters from "../assets/Кандидаты/Волонтеры/image 42.png";
import Psicholog from "../assets/Кандидаты/психолог/image 43.png";
import Obraz from "../assets/Кандидаты/Образование/Даша.png";
import Sreda from "../assets/Кандидаты/Среда/image 44.png";
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
import miningEagles from "../assets/Эмблемы клубы/ССК _Горные ястребы_/Горные ястребы.png";
import pimenov from "../assets/Кандидаты/ГЯ/Юрпа.png";
import mirshavka from "../assets/Кандидаты/ГЯ/image 45.png";
import julia from "../assets/Кандидаты/Среда/image 47.png";
import macab from "../assets/Кандидаты/Академисты/image 50.png";
import crush from "../assets/Кандидаты/Дебаты/image 48.png";
import mamleev from "../assets/Кандидаты/Общаги/image 49.png";

function CandidatesClub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { clubId } = useParams();
  console.log(clubId);
  const candidatesData = {
    vneshka: [
      {
        name: "Домненко Анна",
        image: Anna,
        desc: "Технологическая безопасность и горноспасательное дело, БТС-20",
        experience: [""],
        program: "",
        disabled: true,
      },
    ],
    arch: [
      {
        name: "Шолох Екатерина",
        image: Archi,
        desc: "Архитектура, АГС-19-1",
        experience: [
          "Занимаю пост председателя данного клуба уже два года. За это время клуб обрел популярность в профессиональной среде, налажены контакты с профессиональным сообществом (дом Архитектора). В будущем планируется продолжение роста клуба.",
        ],
        program:
          "https://vk.com/doc184572507_663361772?hash=4hNPLEvZDZBBE7BPJD4AQoXC564N3c419CnVrNv7C8T&dl=qgxQezRTaJjcn4wX3wpiz2xPkPLot3LOMr9L9QenCJ8",
        disabled: false,
      },
    ],
    ecolog: [
      {
        name: "Владимирова Елена",
        image: Ecolog,
        desc: "Экология и природопользование, ИЗБ-20-2",
        experience: [""],
        program:
          "https://vk.com/doc180200276_660037290?hash=vz5CQVhv9mEVdS9LsMFDzDogxGalzHslBZbMWYCULIc&dl=T5GWjW0rReZ4KSR35ORXapx1KFM8xfrZXeoa5kRtAZT",
        disabled: false,
      },
    ],
    "17-73": [
      {
        name: "Темнов Алексей",
        image: Semnad,
        desc: "Информационные системы и технологии, ИСТ-21-1",
        experience: [
          "Являюсь председателем клуба в нынешнем году и решил пойти на следующий год. При этом занимаюсь проведением подобных мероприятий (интеллектуальных игр) уже 7 лет. Из-за сильной ответственности и трудолюбивости, готов продолжить уделять время клубу и дальше.",
        ],
        program:
          "https://vk.com/doc437890124_655360437?hash=Fy3elMDZ05xkREHVYv827uHVbmmz5GeRUjJe8MJlgKo&dl=VlqohhzyRiLRZLPLPtoKBWzHPj6PrKr4Usegonqf7VL",
        disabled: false,
      },
    ],
    volonters: [
      {
        name: "Желтова Софья",
        image: Volonters,
        desc: "Металлургия цветных металлов, МЦ-20",
        experience: [
          "являюсь тим-лидером направления работы с животными",
          "волонтер CASE-IN",
          "международного форума ЮНЕСКО",
          "фанатка животных",
        ],
        program: "",
        disabled: true,
      },
    ],
    psich: [
      {
        name: "Пашков Антон",
        image: Psicholog,
        desc: "Геология нефти и газа, ГНГ-19",
        experience: [
          "Люблю котиков, когда светит солнышкои четверги. Люблю Соломенных Енотов, смотреть в окно и когда зелёные машины виду из окна. Мопсы смешные",
        ],
        program: "",
        disabled: true,
      },
    ],
    kachobr: [
      {
        name: "Карпова Дарья",
        image: Obraz,
        desc: "Нефтегазовое дело, ЭХТ-20",
        experience: [
          "Не знаете, как во время первой вашей поездки впервые в жизни что-то сломать, чтобы после этого вам провели первую в вашей жизни операцию? Пишите мне, расскажу.",
        ],
        program:
          "https://vk.com/doc327992512_658833615?hash=HnmZ81728WJnKAQ09UaYSukZXpVqtwYtPOepZ44vKr8&dl=jyRsYqQUzoq9rOzBevhTjeVeiL6E320O34oCXzRDgAz",
        disabled: false,
      },
    ],
    sreda: [
      {
        name: "Аваргина Екатерина",
        image: Sreda,
        desc: "Системный анализ и управление, САМ-21-1",
        experience: [
          "Меня зовут Катя. С самого детства занимаюсь музыкой: в основном пою, играю на фоно и гитаре. Больше всего на свете люблю музыку, ни дня не провожу без нее!)Вдохновляюсь творческими людьми и стараюсь вдохновлять других!",
        ],
        program:
          "https://vk.com/doc208129860_655778593?hash=jdV2KBoVW9JTJEF2ueCEg666pxJAF5jd5XmOtReLjkX&dl=MUozgTD7frbqG1RKojQbdQe4WaKtGjp1DiuIXXDRl50",
        disabled: false,
      },
      {
        name: "Берестова Юлия",
        image: julia,
        desc: "Материаловедение и технологии новых материалов",
        experience: [
          `Обожаю музыку, фотографию и животных. Мне нравится (и вроде как получается) организовывать мероприятия, особенно музыкальные!)`,
        ],
        program:
          "https://vk.com/doc184366118_659205116?hash=4SsKY4YTkOkuZcHodtSwxgqPatUkBzm4kqY1dDBm0mg&dl=JhfQR7Ly8rUNZBwfzlqd2HJ6c0K3OkH43zHh21yTUwo",
        disabled: false,
      },
    ],
    miningEagles: [
      {
        name: "Пименов Юрий",
        image: pimenov,
        desc: "Промышленное и гражданское строительство, ПГС-20",
        experience: [
          "Больше всего на свете меня привлекает сон и Чикен-Премьер с халапеньо. Не могу жить без путешествий и приключений",
        ],
        program: "",
        disabled: true,
      },
    ],
    academ: [
      {
        name: "Мацаберидзе Олег",
        image: macab,
        desc: "Строительство подземных сооружений, СПС-21-2",
        experience: [
          `Занимался внеурочной деятельностью еще со школы. В университете создал новый проект, который за полгода перерос в клуб, целью которого просвещение в сфере культуры и гуманитарных наук.`,
        ],
        program: "",
        disabled: true,
      },
    ],
    debats: [
      {
        name: "Крушинов Роман",
        image: crush,
        desc: "Системный анализ и управление, САМ-20",
        experience: [
          `Занимаюсь дебатами уже 6 лет и имею обширный опыт в координации и управлении студенческим сообществом. Хочу расширить клуб “Дебаты в Горном” и расширить взаимодействие клуба с аналогичными клубами в других вузах.`,
        ],
        program: "",
        disabled: true,
      },
    ],
    obshaga: [
      {
        name: "Мамлеев Линар",
        image: mamleev,
        desc: "Электропривод и автоматика, ЭРБ-20",
        experience: [
          `Председатель общежития №1 с 2021 года. За эти годы я и моя команда смогли «возродить» добрые традиции совета общежитий в общежитии №1 такие как: проводить мероприятия, помогать студентам, администрации общежития и т.д. И теперь мне хочется поделиться опытом со своими коллегами и возглавить студенческий совет общежитий.`,
        ],
        program:
          "https://vk.com/doc107296459_656535469?hash=PqxGA4SFVbxflQTsjPBDieTCFvEaSJCIxFeFrMY3wM4&dl=b7sTjwYtJ1ffjZ1paQOfohzZz6yIrtETPsHLDJYY0Dc",
        disabled: false,
      },
    ],
  };
  const facultyCandidates = candidatesData[clubId];
  const headerTitle =
    clubId == "academ"
      ? "Академисты"
      : clubId == "vneshka"
      ? "Внешние связи"
      : clubId == "volonters"
      ? "Волонтерский штаб"
      : clubId == "debats"
      ? "Дебаты в Горном"
      : clubId == "17-73"
      ? "Интеллектуальный клуб '17-73'"
      : clubId == "kachobr"
      ? "Качество образования"
      : clubId == "english"
      ? "Mining English Speaking Club"
      : clubId == "nastolki"
      ? "Настольные игры в Горном"
      : clubId == "kultmass"
      ? "Клуб культурно-массовых проектов"
      : clubId == "media"
      ? "Медиа Горный"
      : clubId == "psich"
      ? "Психологические игры в Горном"
      : clubId == "trening"
      ? "Студенческий тренинг-центр"
      : clubId == "gardening"
      ? "Mining Gardening"
      : clubId == "sreda"
      ? "Творческий клуб"
      : clubId == "metrolog"
      ? "Студенческий клуб Метролог"
      : clubId == "ecolog"
      ? "Научное общество 'Эколог'"
      : clubId == "neft"
      ? "Нефтегазовый инжиниринг"
      : clubId == "geolog"
      ? "Геологический инжиринг"
      : clubId == "miningEagles"
      ? `СКК "Горные Ястребы"`
      : (clubId = "archi")
      ? "Архитектурный клуб 'reseARCH'"
      : (clubId = "obshaga")
      ? "ООО проживающих общежитий"
      : "No title";

  const headerImage =
    clubId == "academ"
      ? academ
      : clubId == "vneshka"
      ? vneshka
      : clubId == "volonters"
      ? volonters
      : clubId == "debats"
      ? debats
      : clubId == "17-73"
      ? semnadcat
      : clubId == "kachobr"
      ? obraz
      : clubId == "english"
      ? english
      : clubId == "nastolki"
      ? nastolki
      : clubId == "kultmass"
      ? kultmass
      : clubId == "media"
      ? media
      : clubId == "psich"
      ? psich
      : clubId == "trening"
      ? tren
      : clubId == "gardening"
      ? gardening
      : clubId == "sreda"
      ? sreda
      : clubId == "metrolog"
      ? metrolog
      : clubId == "ecolog"
      ? ecolog
      : clubId == "neft"
      ? neft
      : clubId == "geolog"
      ? geolog
      : clubId == "miningEagles"
      ? miningEagles
      : clubId == "archi"
      ? archi
      : "No label";
  const bgcolor =
    clubId == "academ"
      ? "academ"
      : clubId == "vneshka"
      ? "vneshka"
      : clubId == "volonters"
      ? "volonters"
      : clubId == "debats"
      ? "debats"
      : clubId == "17-73"
      ? "semnadcat"
      : clubId == "kachobr"
      ? "obraz"
      : clubId == "english"
      ? "english"
      : clubId == "nastolki"
      ? "nastolki"
      : clubId == "kultmass"
      ? "kultmass"
      : clubId == "media"
      ? "media"
      : clubId == "psich"
      ? "psich"
      : clubId == "trening"
      ? "tren"
      : clubId == "gardening"
      ? "gardening"
      : clubId == "sreda"
      ? "sreda"
      : clubId == "metrolog"
      ? "metrolog"
      : clubId == "ecolog"
      ? "ecolog"
      : clubId == "neft"
      ? "neft"
      : clubId == "geolog"
      ? "geolog"
      : clubId == "miningEagles"
      ? "miningEagles"
      : clubId == "archi"
      ? "archi"
      : "obshaga";

  return (
    <>
      <Header text={headerTitle} to={`../Clubs`}>
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

export default CandidatesClub;
