import axios from "axios";
import { useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import { RiBookletLine } from "react-icons/ri";

import { DarkMode } from "../../components/darkModel";

export function CreateProducts() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("http://localhost:3334/product/list");
      console.log(data);
      setProductsData(data);
    }
    getProducts();
  }, []);
  return (
    <main className=" w-screen h-screen  bg-[#f2f5f3] dark:bg-black">
      <header className=" flex justify-between h-[65px] bg-gradient-to-r from-[#7658EA] to-[#5C46B2]">
        <div className=" mx-[115px] flex  items-center  justify-center gap-[5px] ">
          <RiBookletLine className=" text-white text-3xl " />
          <h1 className=" text-white font-medium text-base ">Products</h1>
        </div>
        <DarkMode />
      </header>
      <section className="bg-white flex flex-col ml-28 mt-12 mr-12 mb-12 rounded-lg border-[#E9ECEF] dark:bg-[#232323] ">
        <div className="  rounded-b-md border-b border-b-[#e9ecef] size-full dark:border-b-[#333333] ">
          <h2 className=" h-24 p-7 rounded-t-md font-semibold text-xl leading-8 text-[#444648] dark:text-white ">
            Cadastrar Produto
          </h2>
        </div>
        <form className="flex justify-between m-7 text-[#c6c6c6] ">
          <div>
            <label
              htmlFor="img"
              className="font-medium text-base leading-6 pb-1"
            >
              Foto do Produto
            </label>
            <div className="w-64 h-60 flex flex-col justify-end rounded bg-[#c6c6c6] ">
              <input
                type="file"
                accept="image/png, image/.jpg"
                className=" size-full opacity-0"
              />

              <button className="w-64 h-8 flex items-center justify-center gap-2 rounded font-normal text-sm leading-5 text-white bg-[#7557E9] ">
                <FiShare className="w-6 h-6" />
                Selecione um arquivo
              </button>
            </div>
          </div>
          <div className="w-full  flex flex-col pl-7 gap-1">
            <label htmlFor="name" className="font-medium text-base leading-6">
              {productsData.title}
              Nome do Produto
            </label>
            <input
              type="text"
              className="h-11 pl-3 border rounded-sm border-bg-[#cacaca] dark:bg-[#1D1D1D] dark:border-none"
            />
            <label
              htmlFor="obs"
              className="font-medium text-base pt-1 leading-6"
            >
              Observações
            </label>
            <textarea className="h-20 pl-3 border rounded-sm mb-1 border-bg-[#cacaca]  dark:bg-[#1D1D1D] dark:border-none "></textarea>

            <div className="flex">
              <div className="flex flex-col">
                <label
                  htmlFor="value"
                  className="font-medium text-base leading-6"
                >
                  Valor
                </label>
                <input
                  type="number"
                  placeholder="R$"
                  className="h-11 pl-3 border rounded-sm text-black border-bg-[#cacaca]  dark:bg-[#1D1D1D] dark:border-none"
                />
              </div>
              <div className="flex flex-col pl-4">
                <label
                  htmlFor="unid"
                  className="font-medium text-base leading-6"
                >
                  Quantidade
                </label>
                <input
                  type="number"
                  placeholder="00"
                  className="h-11 pl-3 border rounded-sm border-bg-[#cacaca]  dark:bg-[#1D1D1D] dark:border-none "
                />
              </div>
            </div>
          </div>
        </form>
        <div className="rounded-t-md border-t border-t-[#e9ecef] size-full dark:border-t-[#333333] ">
          <div className="flex items-center justify-end gap-2 m-7 ">
            <button className=" text-white px-7  py-2 rounded bg-[#656565] font-normal text-base leading-5 dark:text-white">
              Voltar
            </button>
            <button className=" text-white px-7  py-2 rounded bg-[#7557E9] font-normal text-base leading-5 dark:text-white">
              Salvar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
