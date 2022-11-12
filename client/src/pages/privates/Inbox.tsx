import { useNavigate } from "react-router";
import { Navbar } from "../../components/Navbar";
import { ROUTES, TYPE_ARROWS } from "../../utils/constants";
import { Arrow } from "../../svg/Arrow";

export const Inbox = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate(`${ROUTES.MESSAGE}1`)}
            >
              <img
                src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1667680854/2.0/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e_gstksx.jpg"
                alt="profile_photo"
                className="border-solid border-4 h-16 object-cover w-16 border-cyan_custom rounded-full mr-2"
              />
              <div>
                <h2 className="font-nunito">Juan Jesus</h2>
                <p className="font-nunito">Lorem ipsum dolor sit amet</p>
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
