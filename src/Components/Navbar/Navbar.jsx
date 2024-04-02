import { logo } from "../Assets";
import { cart_icon } from "../Assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

      const [menu, setMenu] = useState("shop")
  return (
    <div className="flex justify-around max-xl:px-6 max-xl:justify-start max-xl:items-center shadow-sm py-3 items-center">
      <div className="nav-logo flex gap-5 items-center">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="flex max-xl:hidden gap-10 font-semibold">
        <li onClick={() => setMenu("shop")} className="flex cursor-pointer flex-col items-center">
          <Link to="/">Shop</Link> {menu=== "shop"?<hr className="w-[80%] border-2 border-red-400" />:<></>}
        </li>
        <li onClick={() => setMenu("mens")} className="cursor-pointer"><Link to="/mens">Men</Link> {menu=== "mens"?<hr className="w-[80%] border-2 border-red-400" />:<></>}</li>
        <li onClick={() => setMenu("womens")} className="cursor-pointer"><Link to="womens">Women</Link> {menu=== "womens"?<hr className="w-[80%] border-2 border-red-400" />:<></>}</li>
        <li onClick={() => setMenu("kids")} className="cursor-pointer"><Link to="/kids">Kids</Link> {menu=== "kids"?<hr className="w-[80%] border-2 border-red-400" />:<></>}</li>
      </ul>
      <div className="flex max-xl:hidden items-center gap-5">
        <Link to="/login">
        <button className="w-[157px] h-[58px] border-2 border-gray-300 outline-none text-[19px] font-semibold rounded-3xl">
          Login
        </button></Link>
        <Link to="/cart">
        <img src={cart_icon} alt="" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-40px] rounded-[11px] text-[14px] bg-red-600 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
