import { CATEGORIES } from "../../constants";

export const Home = () => {
  return (
    <main className=" p-5 bg-pink_custom w-full min-h-screen">
      <h2 className=" text-35px font-bold text-black_custom my-35px">
        Adopt an adorable pet
      </h2>
      <p className="mb-4 text-2xl text-black_custom">Pet categories</p>
      <div className="w-full m-auto flex">
        {CATEGORIES.map((pet) => (
          <div
            className="cursor-pointer flex items-center justify-between my-0 mx-auto w-full max-w-xs first:mr-3"
            key={pet.name}
            id=""
          >
            <div className="rounded-lg flex items-center flex-grow-0 h-24 my-0 p-2 top-0 left-0 text-white w-full bg-blue_1000">
              <div className="flex justify-center static top-2 left-2 bg-cyan_custom rounded-full w-35">
                <img src={pet.img} alt="" className=" w-100px py-5px px-5px" />
              </div>
              <p className=" ml-3 text-2xl">{pet.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
