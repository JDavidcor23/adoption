import { useAuth } from "../../hooks";
import React, { useState } from "react";

export const Login = () => {
  const { authActions } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [event?.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authActions.login(user);
  };

  return (
    <div className="w-full min-h-screen bg-pink_custom flex items-center justify-center flex-col m-0 overflow-hidden p-0">
      <img
        src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104243/Adopcion/leonidasesteban.com_sfkukc.png"
        alt=""
        className="w-36 animate-sideContent"
      />
      <div className="w-full max-w-xs animate-sideContent">
        <form
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full flex justify-center"
            >
              Login
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
