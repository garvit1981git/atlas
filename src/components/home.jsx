import { FaLongArrowAltRight } from "react-icons/fa";
import About from "./about";
import worldLogo from "../images/christine-roy-ir5MHI6rPg0-unsplash.jpg";
let Home = () => {
  return (
    <>
      <div className=" flex flex-col w-full h-[50%] p-[4%]">
        <div className="grid grid-cols-2 grid-rows-3 h-[50%] w-full space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-6 mt-[1%] mb-[3%] p-[auto]">
          {/* Text elements on the left side (column 1) */}
          <h1 className="text-4xl font-black col-start-1 row-start-1">
            Explore the World, One Country at a Time
          </h1>

          <p className="col-start-1 row-start-2">
            discover the history beauty, nation and culture discover the history
            beauty, nation and culture discover the history beauty, nation and
            culture
          </p>

          <button className="rounded-4xl p-3 flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 hover:text-amber-500 transition duration-200 col-start-1 row-start-3 w-[27%] h-[40%]">
            <span>Start Exploring </span>
            <FaLongArrowAltRight />
          </button>

          {/* Image on the right side (column 2), spanning all rows */}
          <img
            src={worldLogo}
            alt="world"
            className="col-start-2 row-span-3 h-[60%] w-[60%] object-cover rounded-4xl transition duration-300 hover:scale-105 m-[auto]"
          />
        </div>
        <About></About>
      </div>
    </>
  );
};
export default Home;
