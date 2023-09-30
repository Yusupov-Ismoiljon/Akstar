import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Magazin from "./components/Magazin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api, bolg } from "./data";
import CardLike from "./layouts/CardLike";
import Blog from "./components/Блог";
import ReactLayouts from "./layouts/ReactLayouts";
import Guitar from "./components/Guitar";
import BlockMalumot from "./components/BlogMalumot";
import Sinup from "./components/Sinup";
import Login from "./components/Login";
import Error404 from "./layouts/Error404";
// import Menu from "./layouts/Menu";

export default function App() {
  const [shop, setShop] = useState([]);
  const [like, setLike] = useState([]);


  const addCart = (i) => {
    const found = shop.find((e) => e.id === i);

    if (!found) {
      const productToAdd = api.find((e) => e.id === i);
      setShop([...shop, { ...productToAdd, miqdor: 1 }]);

      toast.success("Cartga qo'shildi", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Bu oldindan mavjud", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addLike = (i) => {
    const productToAdd = api.find((e) => e.id === i);
    setLike([...like, { ...productToAdd, miqdor: 1 }]);

  };

  const removeLike = (i) => {
    const updatedShop = like.filter((e) => e.id !== i);
    setLike(updatedShop);
  };

  const addCartPul = (product, d) => {
    let ind = -1;
    shop.forEach((data, index) => {
      if (data.id === product.id) {
        ind = index;
      }
    });
    const tempArr = [...shop];
    tempArr[ind].miqdor += d;

    if (tempArr[ind].miqdor === 0) {
      tempArr[ind].miqdor = 1;
    }

    setShop([...tempArr]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<ReactLayouts shop={shop} like={like} addCart={addCart} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/guitar/:id" element={<Guitar shop={shop}  like={like} addCart={addCart} addLike={addLike} removeLike={removeLike} />} />
        <Route path="магазин" element={<Magazin shop={shop} like={like} setShop={setShop} addCart={addCart} addCartPul={addCartPul} />} />
        <Route path="/like" element={<CardLike shop={shop} like={like} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/ьлог" element={<Blog shop={shop} like={like} />} />
        <Route path='/malumotlar/:id' element={<BlockMalumot shop={shop} like={like} />} />
        <Route path='/signup' element={<Sinup shop={shop} like={like} />}/>
        <Route path='/login' element={<Login shop={shop} like={like} />}/>
        <Route path='*' element={<Error404 shop={shop} like={like} />}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
