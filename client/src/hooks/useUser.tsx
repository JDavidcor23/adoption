import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { USER_INTERFACE } from "../interfaces";
import { setUserSlice } from "../slices";
import { STORAGE } from "../utils/constants";
import * as request from "../utils/helper/axiosHelper";

interface RootState {
  user: {
    data: USER_INTERFACE;
  };
}
interface RootState_POST_USER {
  resp: {
    body: USER_INTERFACE;
    token: string;
  };
}

export const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((store: RootState) => store?.user?.data);

  const getUser = async () => {
    const resp = await request.getUser();
    dispatch(setUserSlice(resp));
  };

  const postUser = async (data: USER_INTERFACE) => {
    const resp: AxiosResponse<RootState_POST_USER> = await request.postUser(
      data
    );
    localStorage.setItem(STORAGE.TOKEN, JSON.stringify(resp));
    getUser();
  };

  const userActions = {
    getUser,
    postUser,
  };
  const userVariables = {
    user,
  };
  return {
    userActions,
    userVariables,
  };
};
