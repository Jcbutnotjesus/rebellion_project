import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFilms = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/films", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useFilms = (ids: number[]) => {
  return useQuery({
    queryKey: ["films", ids],
    queryFn: () => fetchFilms(ids),
    enabled: ids.length > 0, 
  });
};