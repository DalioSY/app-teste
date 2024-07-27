import { FiSquare } from "react-icons/fi";

import { formatCurrency } from "../utils/formatCurrency";

export function Card({ img, title, description, value, amount, registration }) {
  return (
    <>
      <div className=" h-20 p-3 flex items-center justify-between overflow-hidden truncate whitespace-nowrap dark:text-white">
        <FiSquare className="h-7 w-7 text-[#E9ECEF]" />
        <img src={img} alt="foto item" />
        <h1>{title} </h1>
        <div className=" w-52 overflow-hidden truncate whitespace-nowrap">
          <p>{description}</p>
        </div>
        <p>{formatCurrency(value)} </p>
        <p>{amount} Und </p>
        <p>{registration} </p>
      </div>
    </>
  );
}
