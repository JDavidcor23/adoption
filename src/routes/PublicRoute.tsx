import { ROUTES } from "../constants";
import { Navigate } from "react-router-dom";
import { PropsRoutes } from "../interfaces/PropsRoutes";

export const PublicRoute = ({ isAuthenticated, children }: PropsRoutes) => {
  return !isAuthenticated ? children : <Navigate to={ROUTES.HOME} />;
};
