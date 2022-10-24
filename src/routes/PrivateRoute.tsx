import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { PropsRoutes } from "../interfaces/PropsRoutes";

export const PrivateRoute = ({ isAuthenticated, children }: PropsRoutes) => {
  return isAuthenticated ? children : <Navigate to={ROUTES.OVERVIEW} />;
};
