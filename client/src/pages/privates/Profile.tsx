import { useCallback, useEffect, useState } from "react";
import { LoaderButton } from "../../components/LoaderButton";
import { Navbar } from "../../components/Navbar";
import { useAuth } from "../../hooks";
import { useUser } from "../../hooks/useUser";

export const Profile = () => {
  const { userActions, userVariables } = useUser();

  const [user, setUser] = useState({
    email: "",
    password: "",
    profileName: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [event?.target.name]: event?.target.value,
    });
  };
  const { authActions, authVariables } = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userActions.postUser({ ...userVariables?.user, ...user });
    setUser({
      email: "",
      password: "",
      profileName: "",
    });
  };
  const getUserCallback = useCallback(() => {
    userActions.getUser();
  }, [userVariables.user]);

  useEffect(() => {
    getUserCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="  bg-pink_custom w-full min-h-91vh">
        <div className="py-0 px-5">
          <h2 className=" text-35px font-bold text-black_custom mx-0 py-2 font-nunito text-center">
            Profile
          </h2>
          <div className="flex flex-col items-center justify-center my-4 max-w-70% m-auto">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-40 object-cover w-40 rounded-full"
                src={userVariables?.user?.profilePhoto}
                alt="Profile_photo"
              />
              <h3 className="text-xl mx-0 my-2 font-bold text-black_custom font-nunito">
                {userVariables?.user?.profileName}
              </h3>
              <p className="text-black_custom font-medium font-nunito">
                Edit Account
              </p>
            </div>
            <form
              className="flex flex-col justify-center my-7 w-90% md:mt-0 md:max-w-2xl"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="font-nunito">
                Name
              </label>
              <input
                type="text"
                name="profileName"
                onChange={handleChange}
                value={user.profileName}
                placeholder={userVariables?.user?.profileName}
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <label htmlFor="" className="font-nunito">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder={userVariables?.user?.email}
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <label htmlFor="" className="font-nunito">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                placeholder="******************"
                className="w-full my-3 h-8 rounded-sm border border-black py-1 px-2 font-nunito"
              />
              <button
                disabled={authVariables.isLoading}
                className="h-12 text-white w-full rounded-3xl bg-black_custom font-bold my-2 font-nunito"
              >
                {authVariables.isLoading ? <LoaderButton /> : "Save"}
              </button>
              <button
                className="h-12 text-white w-full rounded-3xl bg-black_custom font-bold my-2 font-nunito"
                type="button"
                onClick={authActions.logOut}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
