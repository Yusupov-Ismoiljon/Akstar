import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Frame from "./components/Frame";
import Magazin from "./components/Magazin";
import { useState } from "react";
import Guitar from "./components/Guitar";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { api } from "./data";
import CardLike from "./layouts/CardLike";
import Blog from "./components/Блог";
import ReactLayouts from "./layouts/ReactLayouts";


export default function App() {
  const [shop, setShop] = useState([]);
  const [shop1, setShop1] = useState([]);
  const [like, setLike] = useState([]);

  const addCart = (i) => {
    const found = shop.find(e => e.id === i);

    if (!found) {
      const productToAdd = api.find(e => e.id === i);
      setShop([...shop, productToAdd]);

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
      toast.error('Bu oldindan mavjud', {
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
    const found = shop1.find(e => e.id === i);

    const productToAdd = api.find(e => e.id === i);
    setShop1([...shop1, productToAdd]);
  };

  const addLike = (i) => {
    const found = like.find(e => e.id === i);

    const productToAdd = api.find(e => e.id === i);
    setLike([...like, productToAdd]);

    toast.success("Like qo'shildi ...", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeLike = (i) => {
    const updatedShop = like.filter(e => e.id !== i);
    setLike(updatedShop);

    toast.success("Like o'chirildi ...", {
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<ReactLayouts shop={shop} like={like} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike}/>} />
        <Route path="/guitar/:id" element={<Guitar shop={shop} like={like} shop1={shop1} addCart={addCart} addCart1={addCart1} addLike={addLike} />} />
        <Route path="магазин" element={<Magazin shop={shop} like={like} setShop={setShop} addCart={addCart} addCart1={addCart1} />} />
        <Route path="/like" element={<CardLike shop={shop} like={like} addLike={addLike} removeLike={removeLike}/>} />
        <Route path="/ьлог" element={<Blog shop={shop} like={like}/>} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
