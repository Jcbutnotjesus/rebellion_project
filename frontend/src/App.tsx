import React, { useState } from "react";
import Header from "./components/header/Header.tsx";
import Searchbar from "./components/searchbar/Searchbar.tsx";
import "./App.css";
import { useAllData } from "./hooks/useAllData.tsx";
import List from "./components/List/List.tsx";

const App: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allData, isLoading, error } = useAllData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="App">
      <Header onFilterChange={setFilter} />
      <Searchbar onSearch={setSearchQuery} />
      <List filter={filter} searchQuery={searchQuery} allData={allData} />
    </div>
  );
};

export default App;
