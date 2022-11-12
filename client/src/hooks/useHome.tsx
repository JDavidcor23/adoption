import { setAnimalsSlice } from "../slices";
import { ANIMALS } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals as axiosGetAnimals } from "../utils/helper/axiosHelper";
import { useState } from "react";
import { AxiosResponse } from "axios";

interface RootState {
  animals: {
    data: Array<ANIMALS>;
  };
}

export const useHome = () => {
  const dispatch = useDispatch();
  const animals = useSelector((store: RootState) => store?.animals?.data);
  const [animalsResp, setAnimalsResp] = useState<ANIMALS[] | any>();

  const onSetTypePet = (name: string) => {
    const getCategoryPet = animals.filter((animal) => animal.type === name);
    setAnimalsResp(getCategoryPet);
  };

  const getAnimals = async () => {
    const resp: AxiosResponse<ANIMALS[]> = await axiosGetAnimals();
    dispatch(setAnimalsSlice(resp));
    setAnimalsResp(resp);
  };

  const homeActions = {
    getAnimals,
    onSetTypePet,
  };
  const homeData = {
    animalsResp,
  };

  return {
    homeData,
    homeActions,
  };
};
