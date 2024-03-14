import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const BottomNavBar = () => {
  return (
    <div className="relative ">
      <div style={{ position: "fixed", bottom: 0 }} className=" bg-white flex items-center p-4">
        <div className="flex justify-between w-full">
          <a href="/home" className="text-black flex items-center">
            <PiSneakerFill />
          </a>
          <a href="#" className="text-black flex items-center ml-auto">
            <IoSearch className="mr-2" />
          </a>
          <a href="#" className="text-black flex items-center">
            <MdShoppingCart className="mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
