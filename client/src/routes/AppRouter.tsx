/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks";
import { Login, Overview, SignUp } from "../pages/publics";
import { STORAGE, ROUTES } from "../utils/constants";
import { PrivateRoutes } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export function AppRouter() {
  const { authVariables, authActions } = useAuth();
  useEffect(() => {
    if (localStorage.getItem(STORAGE.TOKEN)) {
      authActions.setTrue();
    }
  }, [authVariables.isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        {authVariables.isLoggedIn ? (
          <Route path={ROUTES.REDIRECT} element={<PrivateRoutes />} />
        ) : (
          <Route path={ROUTES.REDIRECT} element={<PublicRoute />} />
        )}
        <Route
          path={ROUTES.ERROR}
          element={<Navigate to={ROUTES.OVERVIEW} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
