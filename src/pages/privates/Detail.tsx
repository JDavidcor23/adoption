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
            className=" bg-slate-900 flex items-center justify-center h-12 w-12 rounded-full absolute top-2.5 left-2.5"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Arrow />
          </div>
          <img src={animal?.img} alt="" className="object-cover w-full h-480" />
          <div className="bg-white h-auto px-0 py-5 absolute w-full rounded-t-3xl bottom-35px">
            <div className="mt-4 mx-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-4">
                  <h3 className="text-3xl font-bold">{animal?.name}</h3>
                  <SvgDetail type={animal?.sex} />
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full shadow-heart">
                  <SvgDetail type={DETAIL.HEART_ONE} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex">
                  <SvgDetail type={DETAIL.RACE} />
                  <p className="  text-xl">{animal?.race}</p>
                </div>
                <div className="flex">
                  <SvgDetail type={DETAIL.AGE} />
                  <p className="text-xl">{animal?.age}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <SvgDetail type={DETAIL.LOCATION} />
                  <p>{animal?.address}</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Personality</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
