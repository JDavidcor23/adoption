import { useHome } from "../../hooks";
import { Arrow } from "../../svg/Arrow";
import { SvgDetail } from "../../svg/SvgDetail";
import { ROUTES, DETAIL } from "../../constants";
import { useNavigate, useParams } from "react-router";

export const Detail = () => {
  const params = useParams();
  const { id } = params;
  const { homeData } = useHome();
  const navigate = useNavigate();
  const animal = homeData.animals.find((pet) => pet.id === id);

  return (
    <div>
      <div className="">
        <div className="relative">
          <div
            className=" bg-slate-900 flex items-center justify-center h-12 w-12 rounded-full absolute top-2.5 left-2.5 z-10"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Arrow />
          </div>
          <div className="w-full h-480 relative">
            <img
              src={animal?.img}
              alt=""
              className="object-cover w-full h-480"
            />
            <div className="bg-white h-auto px-0 absolute w-full rounded-t-3xl bottom-1px py-4"></div>
          </div>
          <div className="mx-5 my-3">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-4">
                  <h3 className="text-3xl font-bold mr-2">{animal?.name}</h3>
                  <SvgDetail type={animal?.sex} />
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full shadow-heart">
                  <SvgDetail type={DETAIL.HEART_ONE} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex">
                  <SvgDetail type={DETAIL.RACE} />
                  <p className="ml-1 text-xl">{animal?.race}</p>
                </div>
                <div className="flex">
                  <SvgDetail type={DETAIL.AGE} />
                  <p className="text-xl ml-1">{animal?.age}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <SvgDetail type={DETAIL.LOCATION} />
                  <p className="ml-1">{animal?.city}</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl">Personality</h3>
              <div className="flex justify-between mt-5">
                {animal?.personality.map((personality) => (
                  <div
                    key={personality}
                    className="flex flex-col items-center justify-between h-24 w-24 rounded-3xl border-solid border border-purple_custom p-4"
                  >
                    <SvgDetail type={personality} />
                    <p>{personality}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-2xl">History of {animal?.name}</h3>
              <p className="mt-4 text-lg text-justify">{animal?.history}</p>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={animal?.profilePhoto}
                  alt=""
                  className="border-solid border-4 h-16 object-cover w-16 border-cyan_custom rounded-full"
                />
                <p className="flex flex-col ml-2">
                  <span>Posted by</span>
                  <span className="font-bold text-lg">
                    {animal?.profileName}
                  </span>
                </p>
              </div>
              <button className="h-12 text-white w-24 rounded-3xl bg-black_custom font-bold">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
