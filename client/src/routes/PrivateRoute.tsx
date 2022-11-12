import { ROUTES } from "../utils/constants";
import { Navigate } from "react-router-dom";
import { PROPS_ROUTES } from "../interfaces";

export const PrivateRoute = ({ isAuthenticated, children }: PROPS_ROUTES) => {
  return isAuthenticated ? children : <Navigate to={ROUTES.OVERVIEW} />;
};
