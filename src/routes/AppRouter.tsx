import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES_ROUTES } from "../constants";
import { Login, Overview, SignUp } from "../pages/publics";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES_ROUTES.LOGIN} element={<Login />} />
        <Route path={PAGES_ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={PAGES_ROUTES.OVERVIEW} element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}
