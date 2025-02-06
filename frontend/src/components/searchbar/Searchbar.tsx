import React from "react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce pour éviter de spammer les requêtes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // 300ms de délai

    return () => clearTimeout(handler);
  }, [search]);

  // Appel de la fonction de recherche parent dès que le debounce est mis à jour
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded mb-4 w-full"
    />
  );
};

export default SearchBar;
