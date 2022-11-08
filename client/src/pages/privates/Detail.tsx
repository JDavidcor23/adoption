import { Arrow } from "../../svg/Arrow";
import { SvgDetail } from "../../svg/SvgDetail";
import { useDetail, useHome } from "../../hooks";
import { ROUTES, DETAIL, STORAGE, COLORS, TYPE_ARROWS } from "../../constants";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { ANIMALS_INTERFACE } from "../../interfaces";

export const Detail = () => {
  const params = useParams();
  const { id } = params;
  const { homeData } = useHome();
  const navigate = useNavigate();
  const { detailActions, detailVariables } = useDetail();
  const animal = homeData.animals.find((pet) => pet.id === id);
  const favoritePets: Array<ANIMALS_INTERFACE> = JSON.parse(
    localStorage.getItem(STORAGE.FAVORITE_PETS) || "[]"
  );
  useEffect(() => {
    if (favoritePets.some((pet) => pet.id === id)) {
      detailActions.setColor(COLORS.DARK_PINK);
    }
  });

  return (
    <div>
      <div className="">
        <div className="relative block sm:flex ">
          <div
            className="bg-slate-900 flex items-center justify-center h-12 w-12 rounded-full absolute top-2.5 left-2.5 z-10 cursor-pointer"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Arrow type={TYPE_ARROWS.LEFT} />
          </div>
          <div className="w-full relative">
            <img
              src={animal?.img}
              alt={`${animal?.name} ${animal?.race}`}
              className="object-cover w-full max-h-screen"
            />
            <div className="bg-white h-auto px-0 absolute w-full rounded-t-3xl bottom-1px py-4 opacity-100 sm:opacity-0"></div>
          </div>
          <div className="mx-5 my-3">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-4">
                  <h3 className="text-3xl font-bold mr-2 font-nunito">
                    {animal?.name}
                  </h3>
                  <SvgDetail type={animal?.sex} />
                </div>
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-full shadow-heart cursor-pointer"
                  onClick={() => detailActions.changeColor(animal?.id, animal)}
                >
                  <SvgDetail type={DETAIL.HEART} fill={detailVariables.color} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex">
                  <SvgDetail type={DETAIL.RACE} />
                  <p className="ml-1 text-xl font-nunito">{animal?.race}</p>
                </div>
                <div className="flex">
                  <SvgDetail type={DETAIL.AGE} />
                  <p className="text-xl ml-1 font-nunito">{animal?.age}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <SvgDetail type={DETAIL.LOCATION} />
                  <p className="ml-1 font-nunito">{animal?.city}</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl font-nunito">Personality</h3>
              <div className="flex justify-between mt-5">
                {animal?.personality.map((personality) => (
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
                History of {animal?.name}
              </h3>
              <p className="mt-4 text-lg text-justify font-nunito">
                {animal?.history}
              </p>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={animal?.profilePhoto}
                  alt={`profile_photo ${animal?.profileName}`}
                  className="border-solid border-4 h-16 object-cover w-16 border-cyan_custom rounded-full"
                />
                <p className="flex flex-col ml-2 font-nunito">
                  <span>Posted by</span>
                  <span className="font-bold text-lg">
                    {animal?.profileName}
                  </span>
                </p>
              </div>
              <button className="h-12 text-white w-24 rounded-3xl bg-black_custom font-bold font-nunito">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
