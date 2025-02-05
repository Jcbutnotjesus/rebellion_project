import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPeople = async () => {
  const { data } = await axios.get("http://localhost:4000/api/people");
  return data;
};

export const usePeople = () => {
  return useQuery({ queryKey: ["people"], queryFn: fetchPeople });
};
