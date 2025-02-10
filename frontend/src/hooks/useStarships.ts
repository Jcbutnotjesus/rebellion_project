import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStarships = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/starships", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useStarships = (ids: number[]) => {
  return useQuery({
    queryKey: ["starships", ids],
    queryFn: () => fetchStarships(ids),
    enabled: ids.length > 0, 
  });
};