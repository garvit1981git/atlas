import { FaLocationDot } from "react-icons/fa6";
import footer from "../api/footer";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
let Footer = () => {
  let icons = {
    loc: <FaLocationDot />,
    cal: <IoCall />,
    mail: <CiMail />,
  };
  return (
    <>
      <footer className="w-full grid grid-cols-3 bg-amber-50 text-fuchsia-950 ">
        {footer.map((e) => (
          <div className="h-full border-2 border-amber-950 p-[2%]">
            <div className=" flex items-center gap-17 ml-[10%] ">
              <div className="text-3xl">{icons[e.icon]}</div>
              <div>
                <p>{e.name}</p>
                <p>{e.subname}</p>
              </div>
            </div>
          </div>
        ))}
      </footer>
    </>
  );
};
export default Footer;
