import React, { useState, xuseState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Magazin from "./components/Magazin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api, api2, api3 } from "../public/data";
import CardLike from "./layouts/CardLike";
import Blog from "./components/Блог";
import ReactLayouts from "./layouts/ReactLayouts";
import Guitar from "./components/Guitar";
import BlockMalumot from "./components/BlogMalumot";
import Sinup from "./components/Sinup";
import Login from "./components/Login";
import Error404 from "./layouts/Error404";
import AyolKiyim from "./components/AyolKiyim";
import Frame from "./components/Frame";
import KitsData from "./components/Kitsdata";

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

  const addCart1 = (i) => {
    const found = shop.find((e) => e.id === i);

    if (!found) {
      const productToAdd = api2.find((e) => e.id === i);
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

  const addCart2 = (i) => {
    const found = shop.find((e) => e.id === i);

    if (!found) {
      const productToAdd = api3.find((e) => e.id === i);
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
    const found = like.find((e) => e.id === i);
    if (!found) {
      const productToAdd = api.find((e) => e.id === i);
      setLike([...like, { ...productToAdd, miqdor: 1 }]);
    }
  };

  const removeLike = (i) => {
    const updatedShop = like.filter((e) => e.id !== i);
    setLike(updatedShop);
  };
  const addLike1 = (i) => {
    const updatedShop = like.find((e) => e.id === i);
    if (!updatedShop) {
      const productToAdd = api2.find((e) => e.id === i);
      setLike([...like, { ...productToAdd, miqdor: 1 }]);
    }

  };

  const removeLike1 = (i) => {
    const updatedShop = like.filter((e) => e.id !== i);
    setLike(updatedShop);
  };
  const addLike2 = (i) => {
    const updatedShop = like.find((e) => e.id === i);
    if (!updatedShop) {
      const productToAdd = api3.find((e) => e.id === i);
      setLike([...like, { ...productToAdd, miqdor: 1 }]);
    }

  };

  const removeLike2 = (i) => {
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
    };
    
    setShop([...tempArr]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts shop={shop} like={like} addCart={addCart} addCart1={addCart1} addCart2={addCart2} addLike={addLike} removeLike={removeLike} addLike1={addLike1} />}>
        <Route path="/" element={<Frame addCart={addCart} addCart1={addCart1} addCart2={addCart2} addLike={addLike} addLike1={addLike1} addLike2={addLike2} removeLike={removeLike} removeLike1={removeLike1} removeLike2={removeLike2} />} />
        <Route path="/erkaklerkiyimlari/:id" element={<Guitar addCart={addCart} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/ayolarkimlari/:id" element={<AyolKiyim addCart1={addCart1} />} />
        <Route path="/bolalar/:id" element={<KitsData addCart2={addCart2} />} />
        <Route path="магазин" element={<Magazin shop={shop} setShop={setShop} addCart={addCart} addCartPul={addCartPul} />} />
        <Route path="/like" element={<CardLike shop={shop} like={like} addLike={addLike} removeLike={removeLike} />} />
        <Route path="/ьлог" element={<Blog />} />
        <Route path='/malumotlar/:id' element={<BlockMalumot />} />
        <Route path='/signup' element={<Sinup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
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
