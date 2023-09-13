import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Frame from "./components/Frame";
import Magazin from "./components/Magazin";
import { useState } from "react";
import Guitar from "./components/Guitar";

export default function App() {
  const [shop, setShop] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Frame shop={shop} setShop={setShop} />} />
        <Route path="/guitar/:id" element={<Guitar shop={shop} setShop={setShop} />} />
        <Route path="магазин" element={<Magazin shop={shop} setShop={setShop} />} />
        <Route path="/академия" element={<Guitar shop={shop} setShop={setShop} />} />
        <Route path="/ьлог" element={<Frame shop={shop} setShop={setShop} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}
