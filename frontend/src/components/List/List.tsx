import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

interface ListProps {
  filter: string;
  searchQuery: string;
  allData: any;
  onItemClick: (item: any) => void;
}

const List: React.FC<ListProps> = ({
  filter,
  searchQuery,
  allData,
  onItemClick,
}) => {
  const filterData = (items: any[]) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="list">
      <h1>Star Wars Data</h1>
      {filter === "all" || filter === "people" ? (
        <>
          <h2>People</h2>
          <ul>
            {filterData(allData.people.results).map((person) => (
              <li key={person.name} onClick={() => onItemClick(person)}>
                <Link to="/details">{person.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "planets" ? (
        <>
          <h2>Planets</h2>
          <ul>
            {filterData(allData.planets.results).map((planet) => (
              <li key={planet.name} onClick={() => onItemClick(planet)}>
                <Link to="/details">{planet.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "starships" ? (
        <>
          <h2>Starships</h2>
          <ul>
            {filterData(allData.starships.results).map((starship) => (
              <li key={starship.name} onClick={() => onItemClick(starship)}>
                <Link to="/details">{starship.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default List;
