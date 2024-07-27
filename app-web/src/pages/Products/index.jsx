import { RiBookletLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { DarkMode } from "./../../components/darkModel";

export function Products() {
  const { pathname } = useLocation();
  return (
    <main className=" w-screen h-screen bg-[#f2f5f3] dark:bg-black">
      <header className=" flex  justify-between h-[65px] bg-gradient-to-r from-[#7658EA] to-[#5C46B2]">
        <div className=" mx-[115px] flex  items-center  justify-center gap-[5px] ">
          <RiBookletLine className=" text-white text-3xl " />
          <h1 className=" text-white font-medium text-base ">Products</h1>
        </div>
        <DarkMode />
      </header>
      <section className="bg-white flex flex-col gap-4 ml-28 mt-12 mr-12 mb-12 rounded-lg p-7 dark:bg-[#232323] ">
        <Link
          className=" text-white px-3  py-2 rounded bg-[#7557E9] font-normal text-base text-center leading-5 dark:text-white"
          to="/produtos/create"
          isActive={pathname === "/produtos/create"}
        >
          Create
        </Link>

        <Link
          className=" text-white px-3  py-2 rounded bg-[#7557E9] font-normal text-base text-center leading-5 dark:text-white"
          to="/produtos/edit"
          isActive={pathname === "/produtos/edit"}
        >
          Edit
        </Link>
      </section>
    </main>
  );
}
