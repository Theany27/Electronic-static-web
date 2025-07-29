import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import NotFound from "./Component/Homepage/ComponentShow/404NotFound";
import IphonePage from "./Component/Homepage/Categories/Phone/IphonePage";
import Mainlayout from "./Component/MainLayOut/Mainlayout";
import AzusPage from "./ProductsPage/AzusPage";
import { CartProvider } from "./Component/Homepage/ComponentShow/CardProvider";
import MsiPage from "./Component/Homepage/Categories/Computer/MsiPage";
import SumsungPage from "./Component/Homepage/Categories/Phone/SumsungPage";
import Ipad_TabletPage from "./Component/Homepage/Categories/Ipad&Tablet/IpadPage";
import IpadPage from "./Component/Homepage/Categories/Ipad&Tablet/IpadPage";
import HuaweiPage from "./Component/Homepage/Categories/Ipad&Tablet/HuaweiPage";
import CheckOutPage from "./Component/MainLayOut/CheckOutPage";
import EndPage from "./Component/MainLayOut/EndPage";



function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/azus" element={<AzusPage/>} />
          <Route path="/msi" element={<MsiPage/>} />
          <Route path="/iphone" element={<IphonePage/>} />
          <Route path="/sumsung" element={<SumsungPage/>} />
          <Route path="/apple" element={<IpadPage/>} />
          <Route path="/huawei" element={<HuaweiPage/>} />
          <Route path="/checkout" element={<CheckOutPage/>} />
          <Route path="/end" element={<EndPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
      </CartProvider>
      </BrowserRouter>
      
      
    </>
  );
}
export default App;
