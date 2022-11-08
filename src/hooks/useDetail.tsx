import { useState } from "react";
import { COLORS, STORAGE } from "../constants";
import { ANIMALS_INTERFACE } from "../interfaces";

export const useDetail = () => {
  //CONSTANTS
  const [color, setColor] = useState("#D9D4E7");

  //FUNCTIONS
  const savePets = (pet: Array<ANIMALS_INTERFACE>) => {
    localStorage.setItem(STORAGE.FAVORITE_PETS, JSON.stringify(pet));
  };

  const changeColor = (
    id: string | undefined,
    pet: ANIMALS_INTERFACE | undefined
  ) => {
    const favoritePets: Array<ANIMALS_INTERFACE> = JSON.parse(
      localStorage.getItem(STORAGE.FAVORITE_PETS) || "[]"
    );

    if (favoritePets.some((pet) => pet.id !== id)) {
      if (pet !== undefined) {
        setColor(COLORS.DARK_PINK);
        savePets([...favoritePets, pet]);
      }
    }

    if (favoritePets.some((pet) => pet.id === id)) {
      const newPets = favoritePets.filter((pet) => pet.id !== id);
      localStorage.setItem(STORAGE.FAVORITE_PETS, JSON.stringify(newPets));
      setColor(COLORS.LIGHT_PINK);
    }
  };

  //OBJ
  const detailActions = {
    setColor,
    changeColor,
  };
  const detailVariables = {
    color,
  };
  return {
    detailActions,
    detailVariables,
  };
};
