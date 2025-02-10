import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSpecies = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/species", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useSpecies = (ids: number[]) => {
  return useQuery({
    queryKey: ["species", ids],
    queryFn: () => fetchSpecies(ids),
    enabled: ids.length > 0,
  });
};