import { Navigate, Route, Routes } from "react-router-dom";
import {
  Detail,
  Favorites,
  Home,
  Inbox,
  Message,
  Profile,
} from "../pages/privates";
import { ROUTES } from "../utils/constants";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.INBOX} element={<Inbox />} />
      <Route path={ROUTES.MESSAGE} element={<Message />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.DETAIL_PARAMS} element={<Detail />} />
      <Route
        path={ROUTES.ERROR}
        element={<Navigate to={ROUTES.HOME} replace />}
      />
    </Routes>
  );
};
