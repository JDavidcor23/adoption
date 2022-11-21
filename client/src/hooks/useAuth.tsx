import { useState } from "react";
import { STORAGE } from "../utils/constants";
import { setIsLoading, setIsLoggedIn } from "../slices";
import { USER_INTERFACE } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import * as request from "../utils/helper/axiosHelper";
import axios from "axios";

interface RootState {
  IsLoggedIn: {
    data: boolean;
  };
}
interface RootStateLoading {
  isLoading: {
    data: boolean;
  };
}
type TypeError = {
  error: string;
};

const profilePhoto =
  "https://res.cloudinary.com/dbtk64lp4/image/upload/v1668383643/2.0/blank-profile-picture-973460__480_jvgcue.png";

export const useAuth = () => {
  //CONSTANTS
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();
  const isLoggedIn = useSelector((store: RootState) => store?.IsLoggedIn?.data);
  const isLoading = useSelector(
    (store: RootStateLoading) => store?.isLoading?.data
  );

  //FUNCTIONS
  const setTrue = () => {
    dispatch(setIsLoggedIn(true));
  };

  const setFalse = () => {
    dispatch(setIsLoggedIn(false));
  };

  const signup = async (data: USER_INTERFACE) => {
    try {
      dispatch(setIsLoading(true));
      let newData = { ...data, profilePhoto };
      const resp = await request.signup(newData);
      localStorage.setItem(STORAGE.TOKEN, JSON.stringify(resp));
      setTrue();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError((error.response?.data as TypeError).error);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const login = async (data: USER_INTERFACE) => {
    try {
      dispatch(setIsLoading(true));
      const resp = await request.login(data);
      localStorage.setItem(STORAGE.TOKEN, JSON.stringify(resp));
      setTrue();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError((error.response?.data as TypeError).error);
      }
    } finally {
      dispatch(setIsLoading(false));
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
    signup,
    login,
  };
  const authVariables = {
    error,
    isLoading,
    isLoggedIn,
  };

  return {
    authActions,
    authVariables,
  };
};
