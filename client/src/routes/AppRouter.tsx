/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks";
import { Login, Overview, SignUp } from "../pages/publics";
import { STORAGE, ROUTES } from "../utils/constants";
import {
  Detail,
  Favorites,
  Home,
  Inbox,
  Message,
  Profile,
} from "../pages/privates";

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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.INBOX} element={<Inbox />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.OVERVIEW} element={<Overview />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.DETAIL_PARAMS} element={<Detail />} />
        <Route path={ROUTES.MESSAGE_PARAMS} element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}
