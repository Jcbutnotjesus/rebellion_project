import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchVehicles = async (ids: number[]) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post("http://localhost:4000/api/vehicles", { ids }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useVehicles = (ids: number[]) => {
  return useQuery({
    queryKey: ["vehicles", ids],
    queryFn: () => fetchVehicles(ids),
    enabled: ids.length > 0, 
  });
};