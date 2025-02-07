import React from "react";
import "./Header.css";

interface HeaderProps {
  onFilterChange: (filter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <a href="#all" onClick={() => onFilterChange("all")}>
              <img src="/assets/all.png" alt="all" className="menu-icon" />
            </a>
          </li>
          <li>
            <a href="#people" onClick={() => onFilterChange("people")}>
              <img
                src="/assets/people.png"
                alt="People"
                className="menu-icon"
              />
            </a>
          </li>
          <li>
            <a href="#planets" onClick={() => onFilterChange("planets")}>
              <img
                src="/assets/planets.png"
                alt="Planets"
                className="menu-icon"
              />
            </a>
          </li>
          <li>
            <a href="#starships" onClick={() => onFilterChange("starships")}>
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
