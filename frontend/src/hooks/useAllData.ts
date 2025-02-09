import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllData = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("http://localhost:4000/api/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAllData = () => {
  return useQuery({
    queryKey: ["allData"],
    queryFn: fetchAllData,
  });
};