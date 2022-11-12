import { ANIMALS_INTERFACE } from "../interfaces";
import { setFavoriteAnimalsSlice } from "../slices";
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

  const favoritesActions = { getFavoriteAnimals };
  const favoritesVariables = { favoriteAnimals };

  return {
    favoritesActions,
    favoritesVariables,
  };
};
