import react, { useContext } from "react";
import { authContext } from "../context/AuthContext";

export const useAuthContext = () => {
  return useContext(authContext);
};
