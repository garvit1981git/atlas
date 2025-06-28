import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
let Concard = ({ countrydata }) => {
  return (
    <>
      {countrydata.map((e) => (
        <div className="card w-[22%] min-w-[250px] bg-white shadow-md rounded-2xl overflow-hidden border border-amber-200 transition-transform hover:scale-105 duration-300 m-[auto] p-[1%]">
          <img
            src={e.flags.png}
            className="w-full h-36 object-cover"
            alt="..."
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2 text-gray-800">
              {e.name.common}
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>Population:</strong> {e.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {e.region}
              </li>
              <li>
                <strong>Capital:</strong> {e.capital}
              </li>
            </ul>
          </div>
          <NavLink to={`/country/${encodeURIComponent(e.name.common.trim())}`}>
            <button className="rounded-4xl p-3.5 flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 hover:text-amber-500 transition duration-200 col-start-1 row-start-3 w-[70%] h-[8%]">
              <span>read more </span>
              <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default Concard;
