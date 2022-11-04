/* eslint-disable react-hooks/exhaustive-deps */
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { ROUTES } from "../../constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Steps = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const components = (step: number) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        navigate(ROUTES.LOGIN);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    components(step);
  }, [step]);

  return (
    <div className="box-border min-h-screen m-0 overflow-hidden p-0 bg-pink_custom flex flex-col items-center">
      <div className="flex items-center justify-center h-full absolute w-full bg-pink_custom animate-loader">
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104243/Adopcion/leonidasesteban.com_sfkukc.png"
          alt=""
          className="scale-150 w-32 h-32 animate-img"
        />
      </div>
      <div className="px-4 py-4 m-auto h-[480px] mb-8 mt-8 w-full">
        {components(step)}
      </div>
      <button
        onClick={() => setStep(step + 1)}
        className="font-black rounded-3xl h-12 text-2xl w-80 bg-black_custom text-tertiary_custom animate-button"
      >
        Next
      </button>
    </div>
  );
};
