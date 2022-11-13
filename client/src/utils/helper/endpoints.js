export const base = process.env.REACT_APP_BACKEND_URL_DEV;

// GET

export const getAnimals = "animals/";

export const getAnimalId = (id) => `animals/${id}`;

export const favoriteAnimals = `favorites_animals/`;
