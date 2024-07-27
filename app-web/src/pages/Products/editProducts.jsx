import { Card } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiFilter,
  FiPlus,
  FiSearch,
  FiSquare,
  FiTrash2,
} from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { RiBookletLine } from "react-icons/ri";

import bolo from "../../assets/bolo.png";
import cheesecake from "../../assets/cheesecake.png";
import { DarkMode } from "../../components/darkModel";

export function EditProducts() {
  return (
    <>
      <main className=" w-screen h-screen bg-[#f2f5f3] dark:bg-black">
        <header className=" flex  justify-between h-[65px] bg-gradient-to-r from-[#7658EA] to-[#5C46B2]">
          <div className=" mx-[115px] flex  items-center  justify-center gap-[5px] ">
            <RiBookletLine className=" text-white text-3xl " />
            <h1 className=" text-white font-medium text-base ">Products</h1>
          </div>
          <DarkMode />
        </header>
        <section className="bg-white flex flex-col gap-4 ml-28 mt-12 mr-12 mb-12 rounded-lg p-7 dark:bg-[#232323] ">
          <div className="flex items-center gap-4 ">
            <span className=" w-9 h-9 text-4xl  flex items-center justify-center rounded bg-[#7154E0]">
              <GoPencil className="text-white text-2xl " />
            </span>
            <span className="w-9 h-9 text-4xl flex items-center justify-center border-2 border-[#7154E0] dark:bg-[#7154E0] rounded">
              <FiPlus className=" text-[#7154E0] text-2xl dark:text-white " />
            </span>
            <span className="w-9 h-9 text-4xl flex items-center justify-center bg-[#DC3545] rounded">
              <FiTrash2 className=" text-white text-2xl" />
            </span>
          </div>
          <div>
            <p className="font-bold text-base leading-5 dark:text-white">
              Arraste o cabeçalho deuma coluna para agrupar por esssa coluna
            </p>
          </div>
          <div className="rounded-md border-2 bg-white border-[#E9ECEF] dark:bg-[#323236] dark:border-none ">
            <ul className="h-12 flex items-center justify-around gap-10 p-3 bg-[#7154E0] text-white font-bold text-base leading-5 rounded-t-md">
              <FiSquare className="h-6 w-6 text-[#E9ECEF]" />
              <li className="flex items-center justify-evenly">
                <span>IMAGEM</span>
                <FiFilter className="h-6 w-6" />
              </li>
              <li className="flex items-center justify-evenly">
                <span>NOME DO PRODUTO</span>
                <FiFilter className="h-6 w-6" />
              </li>
              <li className="flex items-center justify-evenly">
                <span>DESCRIÇÃO</span>
                <FiFilter className="h-6 w-6" />
              </li>
              <li className="flex items-center justify-evenly">
                <span>VALOR</span>
                <FiFilter className="h-6 w-6" />
              </li>
              <li className="flex items-center justify-evenly">
                <span>QUALIDADE</span>
                <FiFilter className="h-6 w-6" />
              </li>
              <li className="flex items-center justify-evenly">
                <span>DATA DE ENTRADA</span>
                <FiFilter className="h-6 w-6" />
              </li>
            </ul>
            <div className="h-12 flex gap-10 p-3 font-bold text-base leading-5 dark:text-white">
              <FiSquare className="h-8 w-8 text-[#E9ECEF]" />
              <div className="flex items-center justify-around w-screen">
                <FiSearch className="h-6 w-6 " />
                <FiSearch className="h-6 w-6 " />
                <FiSearch className="h-6 w-6 " />
                <FiSearch className="h-6 w-6 " />
                <FiSearch className="h-6 w-6 " />
                <FiSearch className="h-6 w-6 " />
              </div>
            </div>
            <div className="bg-[#f9f9f9] dark:bg-[#39393e] ">
              <Card
                img={bolo}
                title="Bolo de Chocolate"
                description="Nosso Bolo de Chocolate Clássico é um deleite irresistível. Com massa fofinha e úmida feita com cacau de alta qualidade, ele possui camadas generosas de ganache de chocolate belga. A cobertura é uma ganache suave e brilhante, adornada com raspas de chocolate artesanal. Perfeito para qualquer ocasião, este bolo oferece uma experiência sublime de sabor e textura."
                value="24.99"
                amount="20"
                registration="20/06/2024"
              />
            </div>
            <Card
              img={cheesecake}
              title="Cheesecake"
              description="Nosso Cheesecake Clássico é a perfeita combinação de suavidade e sabor. Feito com cream cheese de alta qualidade, ele tem uma textura cremosa e aveludada. A base crocante de biscoito de graham complementa perfeitamente o recheio rico. Finalizado com uma fina camada de geleia de frutas vermelhas e decorado com frutas frescas, é ideal para qualquer ocasião especial ou para um mimo diário."
              value="26.99"
              amount="20"
              registration="20/06/2024"
            />
            <div className=" h-20 p-3 flex items-center justify-between">
              <FiSquare className="h-7 w-7 text-[#E9ECEF] dark:text-[#323236] " />
            </div>
            <div className=" h-20 p-3 flex items-center justify-between ">
              <FiSquare className="h-7 w-7 text-[#E9ECEF] dark:text-[#323236] " />
            </div>
            <div className=" h-20 p-3 flex items-center justify-between ">
              <FiSquare className="h-7 w-7 text-[#E9ECEF] dark:text-[#323236]" />
            </div>
            <div className=" h-20 p-3 flex items-center justify-between ">
              <FiSquare className="h-7 w-7 text-[#E9ECEF] dark:text-[#323236]" />
            </div>
            <div className=" h-20 p-3 flex items-center justify-between ">
              <FiSquare className="h-7 w-7 text-[#E9ECEF] dark:text-[#323236]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className=" h-6 w-28 flex items-center gap-1 text-[#7557E9] dark:text-white ">
              <FaFilter className="h-6 w-6 font-normal text-base leading-5" />
              <p>Criar Filtro</p>
            </button>
            <button className=" text-white px-3  py-2 rounded bg-[#7557E9] font-normal text-base leading-5 dark:text-white">
              Limpar Filtro
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center dark:text-white">
              <span className="w-8 h-8 flex items-center justify-center border dark:bg-[#323236] dark:border-none">
                10
              </span>
              <span className="w-8 h-8 flex items-center justify-center border dark:bg-[#323236] dark:border-none">
                20
              </span>
              <span className="w-8 h-8 flex items-center justify-center border dark:bg-[#323236] dark:border-none">
                30
              </span>
            </div>
            <div className=" flex items-center text-[#1C1B1B] px-44 dark:text-white">
              <FiChevronsLeft className=" w-8 h-8 border dark:bg-[#323236] dark:border-none " />
              <FiChevronLeft className=" w-8 h-8 border dark:bg-[#323236] dark:border-none" />
              <span className=" w-8 h-8 flex items-center justify-center border text-white bg-[#7557E9] dark:border-none ">
                1
              </span>
              <span className=" w-8 h-8 flex items-center justify-center border dark:bg-[#323236] dark:border-none">
                2
              </span>
              <FiChevronRight className=" w-8 h-8 border dark:bg-[#323236] dark:border-none" />
              <FiChevronsRight className=" w-8 h-8 border dark:bg-[#323236] dark:border-none" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
