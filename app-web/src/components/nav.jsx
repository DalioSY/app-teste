import { BiBox } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { RiBookletLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlSettings } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/brigadeiro.png";

export function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="z-9999 h-screen fixed top-0 flex flex-col gap-4 w-16 bg-white dark:bg-[#232323] dark:text-white ">
      <div className="flex justify-center my-3 mx-2 ">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex flex-col justify-center gap-8 my-1 mx-2">
        <li>
          <Link
            className="flex justify-center gap-4 hover:border-l-4 border-l-[#7557e8]"
            to="/"
            isActive={pathname === "/"}
          >
            <FiHome className="  text-3xl " />
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center gap-4  hover:border-l-4 border-l-[#7557e8]"
            to="/produtos"
            isActive={pathname === "/produtos"}
          >
            <RiBookletLine className="  text-3xl " />
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center gap-4 hover:border-l-4 border-l-[#7557e8]"
            to="/estoque"
            isActive={pathname === "/estoque"}
          >
            <BiBox className="  text-3xl " />
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center gap-4 hover:border-l-4 border-l-[#7557e8]"
            to="/configuracoes"
            isActive={pathname === "/configuracoes"}
          >
            <SlSettings className="  text-3xl " />
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center gap-4 hover:border-l-4 border-l-[#7557e8]"
            to="/menu"
            isActive={pathname === "/menu"}
          >
            <RxHamburgerMenu className="  text-3xl " />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
