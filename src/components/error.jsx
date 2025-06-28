import { NavLink } from "react-router-dom";
let Error = () => {
  return (
    <>
      <div className="error">
        <h1>This Is Error</h1>
        <NavLink to="/">
          <button>Go To Home</button>
        </NavLink>
      </div>
    </>
  );
};
export default Error;
