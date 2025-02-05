import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStarships = async () => {
  const { data } = await axios.get("http://localhost:4000/api/starships");
  return data;
};

export const useStarships = () => {
  return useQuery({
    queryKey: ["starships"],
    queryFn: fetchStarships,
  });
};
