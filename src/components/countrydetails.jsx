import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { Getindcountrys } from "../api/mainapi";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Loader from "./loader";
let Condetails = () => {
  let [ispending, startTransition] = useTransition();
  let [countrydata, setcountrydata] = useState([]);
  let params = useParams();
  useEffect(() => {
    startTransition(async () => {
      params.id;
      let res = await Getindcountrys(params.id);
      "res", res.data;
      setcountrydata([res.data[0]]);
    });
  }, []);
  useEffect(() => {
    console.log("Updated countrydata:", countrydata);
    // console.log("Updated countrydata:", countrydata[0].name);
  }, [countrydata]);
 return (
  <>
    <div className="min-h-screen w-full bg-amber-50 p-6 text-black">
      {countrydata.length > 0 ? (
        countrydata.map((e) => (
          <div
            key={e.name.common}
            className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-amber-200 p-6 space-y-6"
          >
            {/* Flag */}
            <div className="w-full flex justify-center">
              <img
                src={e.flags.png}
                alt={`${e.name.common} flag`}
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {e.name.common}
            </h2>

            {/* Info List */}
            <ul className="text-base text-gray-700 space-y-2">
              <li>
                <strong>Common Name:</strong> {e.name.common}
              </li>
              <li>
                <strong>Official Name:</strong> {e.name.official}
              </li>
              <li>
                <strong>Population:</strong>{" "}
                {e.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {e.region}
              </li>
              <li>
                <strong>Capital:</strong> {e.capital}
              </li>
              <li>
                <strong>Currency:</strong>{" "}
                {Object.entries(e.currencies)
                  .map(([_, details]) => details.name)
                  .join(", ")}
              </li>
              <li>
                <strong>Currency Symbol:</strong>{" "}
                {Object.entries(e.currencies)
                  .map(([_, details]) => details.symbol)
                  .join(", ")}
              </li>
            </ul>

            {/* Back Button */}
            <div className="flex justify-center pt-4">
              <NavLink to="/country">
                <button className="flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-900 hover:text-amber-500 transition px-6 py-3 rounded-full shadow-md">
                  <span>Go Back</span>
                  <FaLongArrowAltRight />
                </button>
              </NavLink>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center min-h-[500px] mt-64">
          <Loader />
        </div>
      )}
    </div>
  </>
);


};
export default Condetails;
