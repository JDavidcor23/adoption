import { useHome } from "../../hooks";
import { ROUTES } from "../../constants";
import { useNavigate } from "react-router";

export const Cards = () => {
  const { homeData } = useHome();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-center">
      {homeData.animals.map((animal) => (
        <div
          key={animal.id}
          className=" w-145px m-10px h-225px relative"
          onClick={() => navigate(`${ROUTES.DETAIL}${animal.id}`)}
        >
          <img
            src={animal.img}
            alt=""
            className=" rounded-10px w-full h-full"
          />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.0760679271708683) 0%, rgba(0,0,0,1) 100%)",
            }}
            className=" rounded-b-10px absolute w-full text-white bottom-0"
          >
            <p className="mx-2 font-bold">{animal.name}</p>
            <p className="mx-2 my-2 font-bold">{animal.race}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
