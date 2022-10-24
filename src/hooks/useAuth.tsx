import { STORAGE } from "../constants";
import { setIsLoggedIn } from "../slices";
import { useDispatch, useSelector } from "react-redux";
import { USER_INTERFACE } from "../interfaces/user";
import { RootState } from "../interfaces/RootState";

export const useAuth = () => {
  //CONSTANTS
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<RootState, boolean>(
    (store) => store?.IsLoggedIn?.data
  );
  //FUNCTIONS
  const setTrue = () => {
    dispatch(setIsLoggedIn(true));
  };

  const setFalse = () => {
    dispatch(setIsLoggedIn(false));
  };

  const singUp = (data: USER_INTERFACE) => {
    localStorage.setItem(STORAGE.USER, JSON.stringify(data));
    setTrue();
  };

  const login = (data: USER_INTERFACE) => {
    const userExist: USER_INTERFACE = JSON.parse(
      localStorage.getItem(STORAGE.USER) || "{}"
    );
    if (userExist.email) {
      if (
        data.email === userExist.email &&
        data.password === userExist.password
      ) {
        setTrue();
      }
    }
  };

  //OBJ
  const authActions = {
    setTrue,
    setFalse,
    singUp,
    login,
  };
  const authVariables = {
    isLoggedIn,
  };
  return {
    authActions,
    authVariables,
  };
};
