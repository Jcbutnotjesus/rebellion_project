import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPlanets = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/planets", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const usePlanets = (ids: number[]) => {
  return useQuery({
    queryKey: ["planets", ids],
    queryFn: () => fetchPlanets(ids),
    enabled: ids.length > 0,
  });
};