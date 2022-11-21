import React, { useState, useEffect } from "react";

export const LoaderScream = () => {
  return (
    <div className="flex items-center justify-center fixed bg-black animate-loaderInfinite z-50 w-full h-screen">
      <img
        src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104243/Adopcion/leonidasesteban.com_sfkukc.png"
        alt="Logo"
        className="scale-150 w-32 h-32 animate-imgInfinite opacity-100"
      />
    </div>
  );
};
