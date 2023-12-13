import { FC } from "react";
import { Link } from "react-router-dom";

interface SideBarProps {
  isVisible: boolean;
}

const Sidebar: FC<SideBarProps> = ({ isVisible }) => {
  const displayClass = isVisible ? "block" : "hidden";
  return (
    <div className={`${displayClass} h-[100vh] w-[100%] sm:w-[30%] bg-white`}>
      <ul className=" my-[10px]">
        <li className="hover:bg-slate-200 rounded-full flex ml-[10px] items-center h-[50px] w-[90%]">
          <Link
            to="/"
            className="flex items-center w-full gap-[30px] mx-[7.8px] sm:mx-[30px]"
          >
            <img className="w-[1rem]" src="./src/assets/home.svg" />
            <span className="text-[1rem]">Home</span>
          </Link>
        </li>
        <li className="hover:bg-slate-200 rounded-full flex ml-[10px] items-center h-[50px] w-[90%]">
          <Link
            to="/"
            className="flex items-center w-full gap-[30px] mx-[7.8px] sm:mx-[30px]"
          >
            <img className="w-[1rem]" src="./src/assets/home.svg" />
            <span className="text-[1rem]">Home</span>
          </Link>
        </li>
        <li className="hover:bg-slate-200 rounded-full flex ml-[10px] items-center h-[50px] w-[90%]">
          <Link
            to="/"
            className="flex items-center w-full gap-[30px] mx-[7.8px] sm:mx-[30px]"
          >
            <img className="w-[1rem]" src="./src/assets/home.svg" />
            <span className="text-[1rem]">Home</span>
          </Link>
        </li>
        <li className="hover:bg-slate-200 rounded-full flex ml-[10px] items-center h-[50px] w-[90%]">
          <Link
            to="/"
            className="flex items-center w-full gap-[30px] mx-[7.8px] sm:mx-[30px]"
          >
            <img className="w-[1rem]" src="./src/assets/home.svg" />
            <span className="text-[1rem]">Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
