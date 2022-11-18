import { useNavigate } from "react-router";
import { Navbar } from "../../components/Navbar";
import { ROUTES, TYPE_ARROWS } from "../../utils/constants";
import { Arrow } from "../../svg/Arrow";
import { useDetail } from "../../hooks";

export const Inbox = () => {
  const navigate = useNavigate();
  const { detailVariables } = useDetail();

  return (
    <>
      <div className="  bg-pink_custom w-full min-h-screen">
        <div className="p-5">
          <h2 className=" text-35px font-bold text-black_custom my-35px font-nunito text-center">
            Inbox
          </h2>
          <div className="max-w-70% m-auto">
            <div
              className="bg-white flex items-center p-2 justify-between rounded-md cursor-pointer"
              onClick={() => navigate(ROUTES.MESSAGE)}
            >
              <img
                src={detailVariables.chatUser.profilePhoto}
                alt="profile_photo"
                className="border-solid border-4 h-16 object-cover w-16 border-cyan_custom rounded-full mr-2"
              />
              <div>
                <h2 className="font-nunito">
                  {detailVariables.chatUser.profileName}
                </h2>
                <p className="font-nunito">
                  send me a message if you are interested
                </p>
              </div>
              <Arrow type={TYPE_ARROWS.RIGHT} />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
