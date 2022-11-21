import { ANIMALS_INTERFACE } from "../interfaces";
import { setFavoriteAnimalsSlice, setIsLoading } from "../slices";
import { useDispatch, useSelector } from "react-redux";
import * as request from "../utils/helper/axiosHelper";

interface RootState_FavoriteAnimals {
  favoriteAnimals: {
    data: Array<ANIMALS_INTERFACE>;
  };
}

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favoriteAnimals = useSelector(
    (store: RootState_FavoriteAnimals) => store?.favoriteAnimals?.data
  );

  const getFavoriteAnimals = async () => {
    try {
      const resp = await request.getFavoriteAnimals();
      dispatch(setFavoriteAnimalsSlice(resp));
    } catch (error) {
      console.log(error);
    }
  };

  const postFavoriteAnimals = async (animal: ANIMALS_INTERFACE) => {
    try {
      dispatch(setIsLoading(true));
      await request.postFavoriteAnimals(animal);
      favoritesActions.getFavoriteAnimals();
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const deleteFavoriteAnimals = async (id: string) => {
    try {
      dispatch(setIsLoading(true));
      await request.deleteFavoriteAnimals({ id });
      favoritesActions.getFavoriteAnimals();
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const favoritesActions = {
    getFavoriteAnimals,
    postFavoriteAnimals,
    deleteFavoriteAnimals,
  };
  const favoritesVariables = { favoriteAnimals };

  return {
    favoritesActions,
    favoritesVariables,
  };
};
