import { ANIMALS } from "../api";
import { setAnimalsSlice } from "../slices";
import { useDispatch, useSelector } from "react-redux";
import { ANIMALS_INTERFACE } from "../interfaces/animalsInterface";

interface RootState {
  animals: {
    data: Array<ANIMALS_INTERFACE>;
  };
}

export const useHome = () => {
  const dispatch = useDispatch();
  const animals = useSelector((store: RootState) => store?.animals?.data);

  const onSetTypePet = (name: string) => {
    const getCategoryPet = ANIMALS.filter((animal) => animal.type === name);
    dispatch(setAnimalsSlice(getCategoryPet));
  };
  const homeActions = {
    onSetTypePet,
  };
  const homeData = {
    animals,
  };

  return {
    homeData,
    homeActions,
  };
};
