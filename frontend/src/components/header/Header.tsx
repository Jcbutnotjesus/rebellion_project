import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <a href="#people">
              <img
                src="/assets/people.png"
                alt="People"
                className="menu-icon"
              />
            </a>
          </li>
          <li>
            <a href="#planets">
              <img
                src="/assets/planets.png"
                alt="Planets"
                className="menu-icon"
              />
            </a>
          </li>
          <li>
            <a href="#starships">
              <img
                src="/assets/starship.png"
                alt="Starships"
                className="menu-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
