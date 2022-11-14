import apiInstance from "./requestHelper";
import * as endpoints from "./endpoints";

export const login = (data) => {
  return apiInstance(endpoints.login, {
    method: "POST",
    data,
  });
};

export const signup = (data) => {
  return apiInstance(endpoints.signup, {
    method: "POST",
    data,
  });
};

export const getAnimals = () => {
  return apiInstance(endpoints.getAnimals, {
    method: "GET",
    token: true,
  });
};

export const getFavoriteAnimals = () => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "GET",
    token: true,
  });
};

export const getAnimalId = (id) => {
  return apiInstance(endpoints.getAnimalId(id), {
    method: "GET",
    token: true,
  });
};

export const postFavoriteAnimals = (data) => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "POST",
    token: true,
    data,
  });
};
export const deleteFavoriteAnimals = (data) => {
  return apiInstance(endpoints.favoriteAnimals, {
    method: "DELETE",
    token: true,
    data,
  });
};
