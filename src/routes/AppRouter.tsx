/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuth } from "../hooks";
import { Login, Overview, SignUp } from "../pages/publics";
import { STORAGE } from "../constants";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { Favorites, Home, Inbox, Profile } from "../pages/privates";
import { Navbar } from "../components/Navbar";

export function AppRouter() {
  const { authVariables, authActions } = useAuth();
  useEffect(() => {
    if (localStorage.getItem(STORAGE.USER)) {
      authActions.setTrue();
    }
  }, [authVariables.isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute isAuthenticated={authVariables.isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <PublicRoute isAuthenticated={authVariables.isLoggedIn}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <PublicRoute isAuthenticated={authVariables.isLoggedIn}>
              <Overview />
            </PublicRoute>
          }
        />
      </Routes>
      <Route
      path={ROUTES.REDIRECT}
      element={
        <PrivateRoute isAuthenticated={authVariables.isLoggedIn}>
            <DashboardRoutes />
            </PrivateRoute>
          }
        /> */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.INBOX} element={<Inbox />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.OVERVIEW} element={<Overview />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}
