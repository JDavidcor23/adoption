import { useAuth, useDetail, useHome } from "../../hooks";
import { CATEGORIES } from "../../utils/constants";
import { Cards } from "../../components/Cards";
import { Navbar } from "../../components/Navbar";
import { useCallback, useEffect } from "react";
import { LoaderScream } from "../../components/LoaderScream";

export const Home = () => {
  const { homeActions, homeData } = useHome();
  const getAnimals = useCallback(() => {
    homeActions.getAnimals();
  }, []);
  const { authVariables } = useAuth();

  useEffect(() => {
    getAnimals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className=" bg-pink_custom w-full min-h-screen ">
        {authVariables.isLoading && <LoaderScream />}
        <div className="p-5">
          <h2 className="text-35px font-bold text-black_custom my-35px font-nunito text-center">
            Adopt an adorable pet
          </h2>
          <p className="mb-4 text-2xl text-black_custom font-nunito text-center">
            Pet categories
          </p>
          <div className="flex justify-between my-0 mx-auto w-90% max-w-1000px">
            {CATEGORIES.map((pet) => (
              <div
                className={`cursor-pointer flex items-center justify-between my-0 w-full  `}
                key={pet.name}
                onClick={() => homeActions.onSetTypePet(pet.name)}
              >
                <div
                  className={`rounded-lg flex items-center flex-grow-0 h-24 my-0 p-2 top-0 left-0 text-white w-full bg-blue_1000 ${
                    pet.name === "Cats" ? "ml-2" : "mr-2"
                  }`}
                >
                  <div className="flex justify-center static top-2 left-2 bg-cyan_custom rounded-full w-35 max-h-84px max-w-84px ${}">
                    <img
                      src={pet.img}
                      alt={pet.name}
                      className=" w-100px py-5px px-5px"
                    />
                  </div>
                  <p className="ml-3 text-2xl font-nunito">{pet.name}</p>
                </div>
              </div>
            ))}
          </div>
          {homeData.animalsResp !== undefined && (
            <Cards
              animals={homeData.animalsResp}
              class_name="animate-sideAnimalContent"
            />
          )}
        </div>
      </main>
      <Navbar />
    </>
  );
};
