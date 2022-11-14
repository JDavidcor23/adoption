import { setDetailAnimalSlice } from "../slices";
import { ANIMALS_INTERFACE } from "../interfaces";
import * as request from "../utils/helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

interface RootState_DetailAnimal {
  detailAnimal: {
    data: ANIMALS_INTERFACE;
  };
}

export const useDetail = () => {
  //CONSTANTS
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
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

  //OBJ
  const detailActions = {
    getAnimalId,
    setIsFavorite,
  };

  const detailVariables = {
    isFavorite,
    detailAnimal,
  };

  return {
    detailActions,
    detailVariables,
  };
};
