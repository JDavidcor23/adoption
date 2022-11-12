import apiInstance from "./requestHelper";
import * as endpoints from "./endpoints";

export const getAnimals = () => {
  return apiInstance(endpoints.getAnimals, {
    method: "GET",
  });
};

export const getFavoriteAnimals = () => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "GET",
  });
};

export const getAnimalId = (id) => {
  return apiInstance(endpoints.getAnimalId(id), {
    method: "GET",
  });
};

export const postFavoriteAnimals = (data) => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "POST",
    data,
  });
};
export const deleteFavoriteAnimals = (data) => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "DELETE",
    data,
  });
};
