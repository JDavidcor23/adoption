import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES, TYPE_ARROWS } from "../../utils/constants";
import { Arrow } from "../../svg/Arrow";

export const Message = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<string[]>([]);
  const [text, setText] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    setText(event?.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== undefined && conversations !== undefined) {
      setConversations([...conversations, text]);
      setText("");
      return;
    }
    if (text !== undefined && conversations.length === 0) {
      setConversations([text]);
      setText("");
      return;
    }
  };
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
      <div className="relative min-h-80vh flex flex-col  justify-end">
        <div className="flex flex-col items-end justify-end w-full">
          {conversations?.map((p) => (
            <p className="m-2 p-2 text-white bg-black_custom w-90% rounded-xl max-w-sm break-words">
              {p}
            </p>
          ))}
        </div>
        <form
          action=""
          className="flex justify-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={text}
            required
            onChange={handleChange}
            placeholder="Write a message here"
            className=" border-solid border h-8 w-11/12 border-black p-3 m-2"
          />
        </form>
      </div>
    </div>
  );
};
