import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  onFilterChange: (filter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange }) => {
  const handleClick = (filter: string) => {
    onFilterChange(filter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <Link to="/all" onClick={() => handleClick("all")}>
              <img src="/assets/all.png" alt="all" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link to="/people" onClick={() => handleClick("people")}>
              <img
                src="/assets/people.png"
                alt="People"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/planets" onClick={() => handleClick("planets")}>
              <img
                src="/assets/planets.png"
                alt="Planets"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/starships" onClick={() => handleClick("starships")}>
              <img
                src="/assets/starship.png"
                alt="Starships"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/vehicles" onClick={() => handleClick("vehicles")}>
              <img
                src="/assets/vehicles.png"
                alt="Vehicles"
                className="menu-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/films" onClick={() => handleClick("films")}>
              <img src="/assets/films.png" alt="Films" className="menu-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
