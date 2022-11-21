/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { COLORS } from "../../utils/constants";
import { ANIMALS_INTERFACE } from "../../interfaces";
import { useFavorites, useDetail } from "../../hooks";

export const Heart: React.FC<{
  fill: string | undefined;
}> = ({ fill }) => {
  return (
    <svg width={19} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.588 2.162C8.25.823 4.834-1.118 1.678 1.68c-3.171 2.813-.33 6.865 1.487 8.54l6.402 6.489v.041l.02-.02.021.02v-.041l6.402-6.49c1.817-1.674 4.659-5.726 1.487-8.539-3.156-2.798-6.573-.857-7.91.482Z"
        fill={fill}
      />
    </svg>
  );
};
