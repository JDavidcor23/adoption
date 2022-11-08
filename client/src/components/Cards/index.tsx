import { ROUTES } from "../../constants";
import { useNavigate } from "react-router";
import { ANIMALS_INTERFACE } from "../../interfaces";

export const Cards: React.FC<{
  animals: Array<ANIMALS_INTERFACE>;
  class_name?: string;
}> = ({ animals, class_name }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-wrap items-center justify-center w-full m-auto  md:w-90% ${class_name}`}
    >
      {animals.length > 0 &&
        animals.map((animal) => (
          <div
            key={animal.id}
            className="m-10px relative w-145px max-w-320px cursor-pointer md:w-40%"
            onClick={() => navigate(`${ROUTES.DETAIL}${animal.id}`)}
          >
            <img
              src={animal.img}
              alt={`${animal.name} ${animal.race}`}
              className=" rounded-10px w-full h-full"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.0760679271708683) 0%, rgba(0,0,0,1) 100%)",
              }}
              className=" rounded-b-10px absolute w-full text-white bottom-0"
            >
              <p className="mx-2 font-bold font-nunito">{animal.name}</p>
              <p className="mx-2 my-2 font-bold font-nunito">{animal.race}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
