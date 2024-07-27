import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiFilter, FiPlus, FiSquare, FiTrash2 } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { RiBookletLine } from "react-icons/ri";

import { DarkMode } from "../../components/darkModel";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { formatQuantidade } from "../../utils/formatUnd";

export function EditProducts() {
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
        <TableContainer
          component={Paper}
          className="rounded-md border-2  border-[#E9ECEF] dark:bg-[#323236] dark:border-none "
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead className="h-12 flex items-center justify-around gap-10 p-3 bg-[#7154E0] text-white font-bold text-base leading-5 rounded-t-md">
              <TableRow className="h-12 flex items-center justify-around gap-10 p-3 bg-[#7154E0] text-white font-bold text-base leading-5 rounded-t-md">
                <FiSquare className="h-6 w-6 text-[#E9ECEF]" />
                <TableCell className="flex items-center justify-evenly">
                  <span>IMAGEM</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
                <TableCell className="flex items-center justify-evenly">
                  <span>NOME DO PRODUTO</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
                <TableCell className="flex items-center justify-evenly">
                  <span>DESCRIÇÃO</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
                <TableCell className="flex items-center justify-evenly">
                  <span>VALOR</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
                <TableCell className="flex items-center justify-evenly">
                  <span>QUANTIDADE</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
                <TableCell className="flex items-center justify-evenly">
                  <span>DATAA DE ENTREGA</span>
                  <FiFilter className="h-6 w-6" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productsData.map(products => (
                <TableRow
                  key={products.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={products.url} alt="imagem produto" />
                  </TableCell>
                  <TableCell>{products.title}</TableCell>
                  <TableCell>{products.description}</TableCell>
                  <TableCell>{formatCurrency(products.price)}</TableCell>
                  <TableCell>{formatQuantidade(products.amount)}</TableCell>
                  <TableCell>{formatDate(products.deliveryDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </main>
  );
}
