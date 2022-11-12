import { useFavorites } from "./useFavorites";
import { setDetailAnimalSlice } from "../slices";
import { ANIMALS_INTERFACE } from "../interfaces";
import * as request from "../utils/helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";

interface RootState_DetailAnimal {
  detailAnimal: {
    data: ANIMALS_INTERFACE;
  };
}

export const useDetail = () => {
  //CONSTANTS
  const dispatch = useDispatch();
  const { favoritesActions } = useFavorites();
  const detailAnimal = useSelector(
    (store: RootState_DetailAnimal) => store?.detailAnimal?.data
  );

  //FUNCTIONS

  const getAnimalId = async (id: string | undefined) => {
    try {
      const resp = await request.getAnimalId(id);
      dispatch(setDetailAnimalSlice(resp));
    } catch (error) {
      console.log(error);
    }
  };

  const postFavoriteAnimals = async (animal: ANIMALS_INTERFACE) => {
    try {
      await request.postFavoriteAnimals(animal);
      favoritesActions.getFavoriteAnimals();
    } catch (error) {
      console.log(error);
    }
  };

  //OBJ
  const detailActions = {
    getAnimalId,
    postFavoriteAnimals,
  };

  const detailVariables = {
    detailAnimal,
  };

  return {
    detailActions,
    detailVariables,
  };
};
