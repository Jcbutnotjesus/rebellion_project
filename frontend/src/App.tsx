import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";
import "./App.css";
import { useAllData } from "./hooks/useAllData.tsx";
import List from "./components/List/List.tsx";
import Drawer from "./components/Drawer/Drawer.tsx";

const App: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const { data: allData, isLoading, error } = useAllData();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setFilter(path || "all");
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith("/details")) {
      const [, , type, name] = location.pathname.split("/");
      const decodedName = decodeURIComponent(name);
      const item = allData[type]?.results.find(
        (item: any) => item.name === decodedName
      );
      setSelectedItem(item);
    }
  }, [location, allData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <Header onFilterChange={setFilter} />
      <Searchbar onSearch={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <List
              filter={filter}
              searchQuery={searchQuery}
              allData={allData}
              onItemClick={handleItemClick}
            />
          }
        />
        <Route
          path="/all"
          element={
            <List
              filter="all"
              searchQuery={searchQuery}
              allData={allData}
              onItemClick={handleItemClick}
            />
          }
        />
        <Route
          path="/people"
          element={
            <List
              filter="people"
              searchQuery={searchQuery}
              allData={allData}
              onItemClick={handleItemClick}
            />
          }
        />
        <Route
          path="/planets"
          element={
            <List
              filter="planets"
              searchQuery={searchQuery}
              allData={allData}
              onItemClick={handleItemClick}
            />
          }
        />
        <Route
          path="/starships"
          element={
            <List
              filter="starships"
              searchQuery={searchQuery}
              allData={allData}
              onItemClick={handleItemClick}
            />
          }
        />
        <Route
          path="/details/:type/:name"
          element={
            <Drawer
              isOpen={!!selectedItem}
              onClose={handleCloseDrawer}
              item={selectedItem}
            />
          }
        />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
