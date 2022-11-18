import { useState } from "react";
import { STORAGE } from "../utils/constants";
import { setIsLoggedIn } from "../slices";
import { USER_INTERFACE } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import * as request from "../utils/helper/axiosHelper";

export interface RootState {
  IsLoggedIn: {
    data: boolean;
  };
}
const profilePhoto =
  "https://res.cloudinary.com/dbtk64lp4/image/upload/v1668383643/2.0/blank-profile-picture-973460__480_jvgcue.png";

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

  const singUp = async (data: USER_INTERFACE) => {
    try {
      let newData = { ...data, profilePhoto };
      const resp = await request.signup(newData);
      localStorage.setItem(STORAGE.TOKEN, JSON.stringify(resp));
      setTrue();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data: USER_INTERFACE) => {
    try {
      const resp = await request.login(data);
      localStorage.setItem(STORAGE.TOKEN, JSON.stringify(resp));
      setTrue();
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {
    try {
      localStorage.removeItem(STORAGE.TOKEN);
      setFalse();
    } catch (error) {
      console.log(error);
    }
  };

  //OBJ
  const authActions = {
    setTrue,
    logOut,
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
