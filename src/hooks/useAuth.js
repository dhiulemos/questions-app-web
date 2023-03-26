import { useContext } from "react";
import { AuthContext } from "../data/auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
