import { Cards } from "../../components/Cards";
import { Navbar } from "../../components/Navbar";
import { STORAGE } from "../../utils/constants";
import { ANIMALS_INTERFACE } from "../../interfaces";

export const Favorites = () => {
  const favoritePets: Array<ANIMALS_INTERFACE> = JSON.parse(
    localStorage.getItem(STORAGE.FAVORITE_PETS) || "[]"
  );
  return (
    <>
      <div className=" bg-pink_custom w-full min-h-screen">
        <div className="p-5">
          <h2 className=" text-35px font-bold text-black_custom my-35px font-nunito text-center">
            Favorite Pets
          </h2>
          <Cards animals={favoritePets} />
        </div>
      </div>
      <Navbar />
    </>
  );
};
