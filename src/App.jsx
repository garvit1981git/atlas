import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";

let App = () => {
  return (
    <>
      <Nav></Nav>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};
export default App;
