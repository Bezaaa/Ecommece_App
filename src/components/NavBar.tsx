import { Link } from "react-router-dom";
import { Logo } from "../assets";
import navItems from "../constants/NavItems";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="bg-white shadow-md flex justify-between items-center p-4">
      {/* Logo containter */}
      <div>
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </div>
      {/* Nav items */}
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-gray-700 hover:text-blue-500"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Cart containter */}
      <div className="flex items-center gap-2">
        <CiShoppingCart
          className="text-gray-700 hover:text-blue-500 cursor-pointer"
          size={30}
        />
        <RxAvatar className="cursor-pointer" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
