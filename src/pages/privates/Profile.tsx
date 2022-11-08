import { Navbar } from "../../components/Navbar";

export const Profile = () => {
  return (
    <>
      <div className="  bg-pink_custom w-full min-h-screen">
        <div className="p-5">
          <h2 className=" text-35px font-bold text-black_custom mx-0 my-2 font-nunito text-center">
            Profile
          </h2>
          <div className="flex flex-col items-center justify-center my-4 max-w-70% m-auto">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-40 object-cover w-40 rounded-full"
                src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1667908952/2.0/Quincy-Larson-photo_ki2y8k.jpg"
                alt="Profile_photo"
              />
              <h3 className="text-xl mx-0 my-2 font-bold text-black_custom font-nunito">
                Juan Méndez
              </h3>
              <p className="text-black_custom font-medium font-nunito">
                Edit Account
              </p>
            </div>
            <div className="flex flex-col justify-center my-7 w-90%">
              <label htmlFor="" className="font-nunito">
                Name
              </label>
              <input
                type="text"
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <label htmlFor="" className="font-nunito">
                Last name
              </label>
              <input
                type="text"
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <label htmlFor="" className="font-nunito">
                Email
              </label>
              <input
                type="text"
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <button className="h-12 text-white w-full rounded-3xl bg-black_custom font-bold my-2 font-nunito">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
