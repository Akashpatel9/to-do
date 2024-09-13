import union from "../../public/Union.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { PiMoonStars } from "react-icons/pi";
import Switcher from "./Switcher";

function NevBar({setSideBar}) {
  return (
    <div className="w-full h-14 flex items-center justify-between py-3 dark:bg-[#242424] max-sm:w-full max-sm:px-4">
      <div className="w-36 max-sm:w-full h-8 flex items-center gap-6">
        <HiOutlineBars3 onClick={()=>setSideBar((pre)=>!pre)} className="w-6 h-6 cursor-pointer" />
        <div className="w-24 h-8 flex items-center gap-1">
          <img className="w-6 h-6" src={union} />
          <h1 className="text-xl font-bold text-[#3F9142]">DoIt</h1>
        </div>
      </div>

      <div className="w-96 h-6 flex justify-end items-center gap-6">
        <CiSearch className="text-xl " />
        <CiGrid41 className="text-xl" />
        <Switcher />
      </div>
    </div>
  );
}

export default NevBar;
