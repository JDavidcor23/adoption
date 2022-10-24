import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { PropsRoutes } from "../interfaces/PropsRoutes";

export const PublicRoute = ({ isAuthenticated, children }: PropsRoutes) => {
  return !isAuthenticated ? children : <Navigate to={ROUTES.HOME} />;
};
