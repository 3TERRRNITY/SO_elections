import { Link } from "react-router-dom";
import "./App.css";
import Gerb from "./assets/Герб.png";
import Eugen from "./assets/Женя-новая.png";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleClick() {
    setClickCount(clickCount + 1);
    if (clickCount >= 10) {
      alert("Ебать я кто?");
      setClickCount(0);
    }
  }

  return (
    <>
      <div className="header">
        <img src={Gerb} onClick={handleClick} />
        <p className="header__text">
          Первое высшее техническое учебное заведение в России <br />
          САНКТ-ПЕТЕРБУРГСКИЙ ГОРНЫЙ УНИВЕРСИТЕТ <br />
          Основан в 1773 году
        </p>
      </div>
      <div className="select">
        <p className="select__title">ВЫБОРЫ ПРЕДСЕДАТЕЛЕЙ 2023/24</p>
        <div className="select__buttons">
          <button className="select__button">
            <Link to={"Faculties"}>
              <a className="select__button__link">факультетов</a>
            </Link>
          </button>

          <button className="select__button">
            <Link to={"Clubs"}>
              <a className="select__button__link">клубов</a>
            </Link>
          </button>
          <button className="select__button">
            <Link to={"OOO"}>
              <a className="select__button__link">ООО</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="dates">
        <p className="dates__title">Даты проведения выборов</p>
        <table className="dates__table">
          <tr className="dates__table__header">
            <th>10.04</th>
            <th>11.04</th>
            <th>12.04</th>
            <th>13.04</th>
            <th>14.04</th>
            <th>15.04</th>
            <th>16.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>СФ</td>
            <td>ГФ</td>
            <td>ФПМС</td>
            <td>ЭФ</td>
            <td>НГФ</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>ГРФ</td>
            <td></td>
            <td>ФФиГД</td>
            <td></td>
            <td>ЭНФ</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>ММФ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
        <table className="dates__table__second">
          <tr className="dates__table__header">
            <th>17.04</th>
            <th>18.04</th>
            <th>19.04</th>
            <th>20.04</th>
            <th>21.04</th>
            <th>22.04</th>
            <th>23.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>Внешние связи</td>
            <td>НО "Эколог"</td>
            <td>ИЦ "Медиа Горный"</td>
            <td>"17-73"</td>
            <td>Качество образования</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Волонтерский штаб</td>
            <td></td>
            <td></td>
            <td>Геологический инжиниринг</td>
            <td>Клуб психологических игр</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Архитектурный клуб</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
        <table className="dates__table__second">
          <tr className="dates__table__header">
            <th>24.04</th>
            <th>25.04</th>
            <th>26.04</th>
            <th>27.04</th>
            <th>28.04</th>
            <th>29.04</th>
            <th>30.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>Студенческий тренинг-центр</td>
            <td>Нефтегазовый инжиниринг</td>
            <td>Дебаты в Горном</td>
            <td>Mining English Speaking Club</td>
            <td>Академисты</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Творческий клуб</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Mining Gardening</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Спортивные клубы</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Настольные игры</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
      </div>
      <div className="documents">
        <p className="documents__title">ДОКУМЕНТЫ</p>
        <div className="documents__btns">
          <button className="documents__btn">
            <a
              href="https://drive.google.com/file/d/16C9h-KzsStIeBwq6A0n7zGeJe7lC4Cs-/view"
              target="_blank"
              rel="noreferrer"
            >
              Положение
            </a>
          </button>
          <button className="documents__btn">
            <a
              href="https://drive.google.com/file/d/1n0CXf4vewjlzJrDyZRVIbUTlKN5KwGG-/view"
              target="_blank"
              rel="noreferrer"
            >
              Регламент
            </a>
          </button>
          <button className="documents__btn">
            <a
              href="https://docs.google.com/spreadsheets/d/1fjxbMk6aRRsU_3uQtopYoBezhCWlyWkCQOUQOOKBCQ4/edit#gid=0"
              target="_blank"
              rel="noreferrer"
            >
              Протоколы <br />
              выборов
            </a>
          </button>
        </div>
      </div>
      <div className="questions">
        <p className="questions__title">ОСТАЛИСЬ ВОПРОСЫ?</p>
        <div className="questions__container">
          <div className="questions__container__text">
            <p>По всем вопросам, пожеланиям и предложениям можно написать</p>
            <button>
              <a
                href="https://vk.com/cptngrimsby"
                target="_blank"
                rel="noreferrer"
              >
                Жильцову Евгению
              </a>
            </button>
          </div>
          <img
            className="questions__container__image"
            src={Eugen}
            alt="Жильцов Евгений"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
