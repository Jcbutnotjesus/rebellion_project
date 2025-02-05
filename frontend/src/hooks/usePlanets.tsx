import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPlanets = async () => {
  const { data } = await axios.get("http://localhost:4000/api/planets");
  return data;
};

export const usePlanets = () => {
  return useQuery({ queryKey: ["planets"], queryFn: fetchPlanets });
};
