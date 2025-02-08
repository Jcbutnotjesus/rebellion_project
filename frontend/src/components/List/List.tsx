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
      item.name !== undefined
        ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
        : item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="list">
      <h1>Star Wars Data</h1>
      {filter === "all" || filter === "people" ? (
        <>
          {filter === "people" && <h2>People</h2>}
          <ul>
            {filterData(allData.people.results).map((person) => (
              <li key={person.name} onClick={() => onItemClick(person)}>
                <Link to={`/details/people/${encodeURIComponent(person.name)}`}>
                  {person.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "planets" ? (
        <>
          {filter === "planets" && <h2>Planets</h2>}
          <ul>
            {filterData(allData.planets.results).map((planet) => (
              <li key={planet.name} onClick={() => onItemClick(planet)}>
                <Link
                  to={`/details/planets/${encodeURIComponent(planet.name)}`}
                >
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "starships" ? (
        <>
          {filter === "starships" && <h2>Starships</h2>}
          <ul>
            {filterData(allData.starships.results).map((starship) => (
              <li key={starship.name} onClick={() => onItemClick(starship)}>
                <Link
                  to={`/details/starships/${encodeURIComponent(starship.name)}`}
                >
                  {starship.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "vehicles" ? (
        <>
          {filter === "vehicles" && <h2>Vehicles</h2>}
          <ul>
            {filterData(allData.vehicles.results).map((vehicle) => (
              <li key={vehicle.name} onClick={() => onItemClick(vehicle)}>
                <Link
                  to={`/details/vehicles/${encodeURIComponent(vehicle.name)}`}
                >
                  {vehicle.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "films" ? (
        <>
          {filter === "films" && <h2>Films</h2>}
          <ul>
            {filterData(allData.films.results).map((film) => (
              <li key={film.title} onClick={() => onItemClick(film)}>
                <Link to={`/details/films/${encodeURIComponent(film.title)}`}>
                  {film.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default List;
