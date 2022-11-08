import React from "react";
import { useNavigate } from "react-router";
import { ROUTES, TYPE_ARROWS } from "../../constants";
import { Arrow } from "../../svg/Arrow";

export const Message = () => {
  const navigate = useNavigate();

  return (
    <div className="  bg-pink_custom w-full min-h-screen">
      <div className="bg-white p-5 relative">
        <div
          className="bg-slate-900 flex items-center justify-center h-12 w-12 rounded-full absolute top-2.5 left-2.5 z-10 cursor-pointer"
          onClick={() => navigate(ROUTES.INBOX)}
        >
          <Arrow type={TYPE_ARROWS.LEFT} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1667680854/2.0/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e_gstksx.jpg"
            alt="profile_photo"
            className="border-solid border-4 h-24 object-cover w-24 border-cyan_custom rounded-full "
          />
          <h3 className="text-xl mx-0 my-2 font-bold text-black_custom font-nunito">
            Juan Jesus
          </h3>
        </div>
      </div>
      <div className="relative min-h-80vh flex justify-center">
        <input
          type="text"
          placeholder="Write a message here"
          className="absolute bottom-1 border-solid border h-8 w-11/12 border-black p-3"
        />
      </div>
    </div>
  );
};
