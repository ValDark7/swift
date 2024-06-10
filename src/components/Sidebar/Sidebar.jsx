import React from "react";

import { Brands, Categories, Seasons } from "../../components/";

import "./sidebar-style.css";

const brands = ["Nike", "Adidas", "Puma", "Asics", "Reebook", "New Balance"];
const categories = ["Баскетбол", "Бег", "Футбол", "Кроссовки с мехом"];
const seasons = ["Лето", "Осень", "Зима", "Весна"];

function Sidebar() {
  const [open, setOpen] = React.useState([false, false, false]);
  const [toggleSidebar, setToggleSidebar] = React.useState(false);

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
    // setToggleSidebar(alert("В разработке..."));
  };

  const toggleClass = (index) => {
    setOpen((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="sticky">
      <img
        onClick={handleSidebar}
        className={toggleSidebar ? "slide-icon" : "slide-icon active"}
        src="img/menu_FILL0_wght400_GRAD0_opsz24.svg"
        alt=""
      />
      <div className={toggleSidebar ? "sidebar-store" : "sidebar-store hide"}>
        <div className="sidebar-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
        <div
          className={toggleSidebar ? "sidebar-content" : "sidebar-content hide"}
        >
          <div className="global-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="search-svg"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input type="search" placeholder="Поиск..." />
          </div>

          <div className="brands">
            <div className="wrapper" onClick={() => toggleClass(0)}>
              <h3>Бренд</h3>
              <svg
                className={open[0] ? "arrow show" : "arrow"}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
              </svg>
            </div>
            <div className={open[0] ? "pop-up show" : "pop-up"}>
              <div className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
                <input type="Search" placeholder="Поиск..." />
              </div>
              {brands.map((brand, index) => {
                return <Brands name={brand} key={index} />;
              })}
            </div>
          </div>
          <div className="categories">
            <div className="wrapper" onClick={() => toggleClass(1)}>
              <h3>Категория</h3>
              <svg
                className={open[1] ? "arrow show" : "arrow"}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
              </svg>
            </div>
            <div className={open[1] ? "pop-up show" : "pop-up"}>
              {categories.map((category, index) => {
                return <Categories name={category} key={index} />;
              })}
            </div>
          </div>
          <div className="wrapper" onClick={() => toggleClass(2)}>
            <h3>Сезон</h3>
            <svg
              className={open[2] ? "arrow show" : "arrow"}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
            </svg>
          </div>
          <div className={open[2] ? "pop-up show" : "pop-up"}>
            {seasons.map((season, index) => {
              return <Seasons name={season} key={index} />;
            })}
          </div>
          <div className="wrapper" onClick={() => toggleClass(3)}>
            <h3>Цена</h3>
            <svg
              className={open[3] ? "arrow show" : "arrow"}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
            </svg>
          </div>
          <div className="btns-show">
            <button className="btn-show">Показать</button>
            <button className="btn-show hide">Сбросить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
