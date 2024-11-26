import React from "react";
import logo from "../../assets/darkor.uz.svg";

function Header() {
  return (
    <header className=" header__container  justify-between px-28 bg-blue-700 py-5 w-full">
      <div className="container max-w-7xl flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <img className="header-img" src={logo} alt="" />
          </a>
        </div>
        <nav className="nav">
          <ul className="flex text-white  gap-6">
            <li>
              <a href="#">Vakansiyalar</a>
            </li>
            <li>
              <a href="#">Kondidatlar</a>
            </li>
            <li>
              <a href="#">Kompaniyalar</a>
            </li>
            <li>
              <a href="#">Xizmatlar</a>
            </li>
            <li>
              <a href="#">Ta'lim</a>
            </li>
          </ul>
        </nav>
        <div>
          <select className="bg-transparent ">
            <option value="Uzbek">O'zb</option>
            <option value="Russ">Rus</option>
            <option value="Eng">Eng</option>
          </select>
          <button className="rounded-md bg-white p-2 w-15">Boshlash</button>
        </div>
      </div>
    </header>
  );
}

export default Header;