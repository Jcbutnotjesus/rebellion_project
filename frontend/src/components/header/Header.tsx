import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/all" onClick={() => onFilterChange("all")}>
              <img src="/assets/all.png" alt="all" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link to="/people" onClick={() => onFilterChange("people")}>
              <img
                src="/assets/people.png"
                alt="People"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/planets" onClick={() => onFilterChange("planets")}>
              <img
                src="/assets/planets.png"
                alt="Planets"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/starships" onClick={() => onFilterChange("starships")}>
              <img
                src="/assets/starship.png"
                alt="Starships"
                className="menu-icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
