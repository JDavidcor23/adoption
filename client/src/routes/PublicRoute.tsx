import { ROUTES } from "../constants";
import { Navigate } from "react-router-dom";
import { PROPS_ROUTES } from "../interfaces";

export const PublicRoute = ({ isAuthenticated, children }: PROPS_ROUTES) => {
  return !isAuthenticated ? children : <Navigate to={ROUTES.HOME} />;
};
