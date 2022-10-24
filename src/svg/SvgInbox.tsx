import React from "react";

export const SvgInbox: React.FC<{ color: boolean; class_name: string }> = ({
  color,
  class_name,
}) => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={class_name}
    >
      <path
        d="M21.3333 11.5C21.3367 12.8199 21.0283 14.1219 20.4333 15.3C19.7277 16.7118 18.643 17.8992 17.3007 18.7293C15.9584 19.5594 14.4115 19.9994 12.8333 20C11.5134 20.0035 10.2114 19.6951 9.03325 19.1L3.33325 21L5.23325 15.3C4.63818 14.1219 4.32981 12.8199 4.33325 11.5C4.33386 9.92179 4.77386 8.37488 5.60397 7.03258C6.43408 5.69028 7.62151 4.6056 9.03325 3.90003C10.2114 3.30496 11.5134 2.99659 12.8333 3.00003H13.3333C15.4176 3.11502 17.3863 3.99479 18.8624 5.47089C20.3385 6.94699 21.2183 8.91568 21.3333 11V11.5Z"
        stroke={color ? "#85d1ce" : "black"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
