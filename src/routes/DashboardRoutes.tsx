import React from "react";
import { ROUTES } from "../constants";
import { Home } from "../pages/privates/Home";
import { Routes, Route, Navigate } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ERROR} element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  );
};
