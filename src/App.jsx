import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Magazin from "./components/Magazin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./data";
import CardLike from "./layouts/CardLike";
import Blog from "./components/Блог";
import ReactLayouts from "./layouts/ReactLayouts";
import Guitar from "./components/Guitar";

export default function App() {
  const [shop, setShop] = useState([]);
  const [shop1, setShop1] = useState([]);
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

  const addCart1 = (productToAdd) => {
    const found = shop1.find((e) => e.id === productToAdd.id);

    if (!found) {
      setShop1([...shop1, { ...productToAdd, miqdor: 1 }]);
    } else {
      // Produktni topganimizda miqdorini yangilaymiz
      const updatedShop1 = shop1.map((e) =>
        e.id === productToAdd.id ? { ...e, miqdor: e.miqdor + 1 } : e
      );
      setShop1(updatedShop1);
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
        <Route path="/" element={<ReactLayouts shop={shop} like={like} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/guitar/:id" element={<Guitar shop={shop} like={like} shop1={shop1} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} />} />
        <Route path="магазин" element={<Magazin shop={shop} like={like} setShop={setShop} addCart={addCart} addCart1={addCart1} addCartPul={addCartPul} />} />
        <Route path="/like" element={<CardLike shop={shop} like={like} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/ьлог" element={<Blog shop={shop} like={like} />} />
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
