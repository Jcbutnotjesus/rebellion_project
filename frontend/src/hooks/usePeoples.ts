import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPeople = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/people", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const usePeople = (ids: number[]) => {
  return useQuery({
    queryKey: ["people", ids],
    queryFn: () => fetchPeople(ids),
    enabled: ids.length > 0, 
  });
};