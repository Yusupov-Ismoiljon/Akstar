import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Frame from "./components/Frame";
import Magazin from "./components/Magazin";
import { useState } from "react";
import Guitar from "./components/Guitar";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { api } from "./data";


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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Frame shop={shop} addCart={addCart} addCart1={addCart1} />} />
        <Route path="/guitar/:id" element={<Guitar shop={shop} shop1={shop1} addCart={addCart} addCart1={addCart1} />} />
        <Route path="магазин" element={<Magazin shop={shop} setShop={setShop} addCart={addCart} addCart1={addCart1} />} />
        <Route path="/академия" element={<Guitar shop={shop} shop1={shop1} addCart={addCart} addCart1={addCart1} />} />
        <Route path="/ьлог" element={<Frame shop={shop} addCart={addCart} addCart1={addCart1} />} />
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
