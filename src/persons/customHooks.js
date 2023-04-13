import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "./queries";


export const usePersons = () => {
  const response = useQuery(ALL_PERSONS);
  return response;
}
