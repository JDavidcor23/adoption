import { STORAGE } from "../constants";
import { setIsLoggedIn } from "../slices";
import { USER_INTERFACE } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";

export interface RootState {
  IsLoggedIn: {
    data: boolean;
  };
}

export const useAuth = () => {
  //CONSTANTS
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store: RootState) => store?.IsLoggedIn?.data);

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
