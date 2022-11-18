import { ROUTES } from "../utils/constants";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Overview, SignUp } from "../pages/publics";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.OVERVIEW} element={<Overview />} />
      <Route
        path={ROUTES.ERROR}
        element={<Navigate to={ROUTES.OVERVIEW} replace />}
      />
    </Routes>
  );
};
