import { useQuery } from "react-query";
import { getLessons } from "../services/service";

export const useGetLessons = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-lessons"],
    queryFn: getLessons,
    retry: false,
    refetchOnWindowFocus: false,
  });
  console.log("first", data?.content);

  return {
    data,
    isLoading,
    error,
  };
};
