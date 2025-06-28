import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 w-full flex flex-col md:flex-row md:justify-between items-center p-4 shadow-lg sticky top-0 right-0">
      {/* Logo */}
      <NavLink
        to="/"
        className="font-black text-3xl text-white hover:text-amber-300 transition mb-2 md:mb-0"
      >
        World Atlas
      </NavLink>

      {/* Nav Menu */}
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-amber-300 text-lg">
        {["/", "/about", "/contact", "/country"].map((path, idx) => {
          idx;
          const label = ["Home", "About", "Contact", "Country"][idx];
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-white transition ${
                    isActive ? "text-white font-semibold underline" : null
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
