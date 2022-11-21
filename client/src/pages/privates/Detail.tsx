import { useEffect } from "react";
import { useDetail, useFavorites } from "../../hooks";
import { Arrow } from "../../svg/Arrow";
import { SvgDetail } from "../../svg/SvgDetail";
import { useNavigate } from "react-router";
import { ROUTES, DETAIL, TYPE_ARROWS } from "../../utils/constants";

export const Detail = () => {
  const navigate = useNavigate();
  const { favoritesActions } = useFavorites();

  const { detailActions, detailVariables } = useDetail();
  const getInbox = (uuid: string) => {
    detailActions.getInbox(uuid);
    navigate(ROUTES.MESSAGE);
  };
  useEffect(() => {
    favoritesActions.getFavoriteAnimals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="overflow-x-hidden">
      {detailVariables.detailAnimal.id !== undefined && (
        <div className="relative block sm:flex ">
          <div
            className="bg-slate-900 flex items-center justify-center h-12 w-12 rounded-full absolute top-2.5 left-2.5 z-10 cursor-pointer animate-sideContentMinus"
            onClick={() => navigate(-1)}
          >
            <Arrow type={TYPE_ARROWS.LEFT} />
          </div>
          <div className="w-full relative animate-sideContentMinus sm:animate-sideContentMinus">
            <img
              src={detailVariables.detailAnimal.img}
              alt={`${detailVariables.detailAnimal.name} ${detailVariables.detailAnimal.race}`}
              className="object-cover w-full max-h-screen"
            />
            <div className="bg-white h-auto px-0 absolute w-full rounded-t-3xl bottom-1px py-4 opacity-100 sm:opacity-0"></div>
          </div>
          <div className="mx-5 my-3 animate-sideAnimalContentDetail sm:animate-sideContentPlus">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-4">
                  <h3 className="text-3xl font-bold mr-2 font-nunito">
                    {detailVariables.detailAnimal.name}
                  </h3>
                  <SvgDetail type={detailVariables.detailAnimal.sex} />
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full shadow-heart cursor-pointer">
                  <SvgDetail type={DETAIL.HEART} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex">
                  <SvgDetail type={DETAIL.RACE} />
                  <p className="ml-1 text-xl font-nunito">
                    {detailVariables.detailAnimal.race}
                  </p>
                </div>
                <div className="flex">
                  <SvgDetail type={DETAIL.AGE} />
                  <p className="text-xl ml-1 font-nunito">
                    {detailVariables.detailAnimal.age}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <SvgDetail type={DETAIL.LOCATION} />
                  <p className="ml-1 font-nunito">
                    {detailVariables.detailAnimal.city}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl font-nunito">Personality</h3>
              <div className="flex justify-between mt-5">
                {detailVariables.detailAnimal.personality.map((personality) => (
                  <div
                    key={personality}
                    className="flex flex-col items-center justify-between h-24 w-24 rounded-3xl border-solid border border-purple_custom p-4"
                  >
                    <SvgDetail type={personality} />
                    <p className="font-nunito">{personality}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl font-nunito">
                History of {detailVariables.detailAnimal.name}
              </h3>
              <p className="mt-4 text-lg text-justify font-nunito">
                {detailVariables.detailAnimal.history}
              </p>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={detailVariables.detailAnimal.profilePhoto}
                  alt={`profile_photo ${detailVariables.detailAnimal.profileName}`}
                  className="border-solid border-4 h-16 object-cover w-16 border-cyan_custom rounded-full"
                />
                <p className="flex flex-col ml-2 font-nunito">
                  <span>Posted by</span>
                  <span className="font-bold text-lg">
                    {detailVariables.detailAnimal.profileName}
                  </span>
                </p>
              </div>
              <button
                onClick={() => getInbox(detailVariables.detailAnimal.uuid)}
                className="h-12 text-white w-24 rounded-3xl bg-black_custom font-bold font-nunito"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
