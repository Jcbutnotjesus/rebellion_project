import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllData = async () => {
  const { data } = await axios.get("http://localhost:4000/api/all");
  return data;
};

export const useAllData = () => {
  return useQuery({
    queryKey: ["allData"],
    queryFn: fetchAllData,
  });
};
