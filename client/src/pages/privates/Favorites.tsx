import { Cards } from "../../components/Cards";
import { Navbar } from "../../components/Navbar";
import { useFavorites } from "../../hooks";
import { useEffect } from "react";

export const Favorites = () => {
  const { favoritesActions, favoritesVariables } = useFavorites();

  useEffect(() => {
    favoritesActions.getFavoriteAnimals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className=" bg-pink_custom w-full min-h-screen">
        <div className="p-5">
          <h2 className=" text-35px font-bold text-black_custom my-35px font-nunito text-center">
            Favorite Pets
          </h2>
          <Cards animals={favoritesVariables.favoriteAnimals} />
        </div>
      </div>
      <Navbar />
    </>
  );
};
