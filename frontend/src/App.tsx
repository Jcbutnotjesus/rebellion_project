import React, { JSX, useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login.tsx";
import { useAuth } from "./context/AuthContext.tsx";
import List from "./components/List/List.tsx";
import Drawer from "./components/Drawer/Drawer.tsx";
import Loader from "./components/Loader/Loader.tsx";
import Header from "./components/Header/Header.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";
import { useAllData } from "./hooks/useAllData.ts";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [previousUrl, setPreviousUrl] = useState<string>("");

  const { data: allData, isLoading, error } = useAllData();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setFilter(path || "all");
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith("/details") && allData) {
      const [, , type, name] = location.pathname.split("/");
      const decodedName = decodeURIComponent(name);
      const item = allData[type]?.results.find(
        (item: any) => item.name === decodedName || item.title === decodedName
      );
      setSelectedItem(item);
      setIsDrawerOpen(true);
    }
  }, [location, allData]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleItemClick = (item: any) => {
    setPreviousUrl(location.pathname);
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={filter}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"all"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/people"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"people"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/planets"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"planets"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/starships"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"starships"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"vehicles"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/films"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <List
                  filter={"films"}
                  searchQuery={searchQuery}
                  allData={allData}
                  onItemClick={handleItemClick}
                />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/details/:type/:name"
          element={
            <ProtectedRoute>
              <>
                <Header onFilterChange={setFilter} />
                <Searchbar onSearch={setSearchQuery} />
                <Drawer
                  isOpen={isDrawerOpen}
                  onClose={handleCloseDrawer}
                  item={selectedItem}
                  previousUrl={previousUrl}
                />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => <App />;

export default AppWrapper;
