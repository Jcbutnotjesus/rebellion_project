import React from "react";

interface ListProps {
  filter: string;
  searchQuery: string;
  allData: any;
}

const List: React.FC<ListProps> = ({ filter, searchQuery, allData }) => {
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
              <li key={person.name}>{person.name}</li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "planets" ? (
        <>
          <h2>Planets</h2>
          <ul>
            {filterData(allData.planets.results).map((planet) => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ul>
        </>
      ) : null}
      {filter === "all" || filter === "starships" ? (
        <>
          <h2>Starships</h2>
          <ul>
            {filterData(allData.starships.results).map((starship) => (
              <li key={starship.name}>{starship.name}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default List;
