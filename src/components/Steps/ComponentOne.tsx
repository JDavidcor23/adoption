import React from "react";

export const ComponentOne = () => {
  return (
    <div className="w-full min-h-screen bg-pink_custom">
      <div className="text-center text-black_custom flex flex-col items-center justify-between min-h-screen px-4 py-4  max-w-2xl m-auto">
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104242/Adopcion/esperando_adopci%C3%B3n_zubzsz.png"
          alt=""
          className="w-72"
        />
        <h2>Find your faithful friend</h2>
        <p className="text-2xl leading-10 text-center tracking-normal text-gray_custom ">
          When you adopt a pet, wonderful things happen in your life. If you're
          thinking about getting a new addition to your family; you're in the
          right place! in the right place!
        </p>
        <button className="font-black rounded-3xl h-12 text-2xl w-80 bg-black_custom text-tertiary_custom">
          Next
        </button>
      </div>
    </div>
  );
};
