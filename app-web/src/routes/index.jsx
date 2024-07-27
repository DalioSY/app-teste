import { Route, Routes } from "react-router-dom";

import { Menu } from "../pages/menu";
import { Products } from "../pages/Products";
import { CreateProducts } from "../pages/Products/createProducts";
import { EditProducts } from "../pages/Products/editProducts";
import { Settings } from "../pages/settings";
import { Stock } from "../pages/stock";
import { DefaultLayout } from "./../layout/DefaultLayout";
import { Home } from "./../pages/home";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/create" element={<CreateProducts />} />
        <Route path="/produtos/edit" element={<EditProducts />} />
        <Route path="/estoque" element={<Stock />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}
