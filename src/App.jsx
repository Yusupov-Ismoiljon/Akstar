import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Frame from "./components/Frame";
import RootLayouts from "./layouts/RootLayouts";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Frame/>}>
        <Route path="/" element={<Frame/>}/>
        <Route path="/магазин" element={<Frame/>}/>
        <Route path="/академия" element={<Frame/>}/>
        <Route path="/ьлог" element={<Frame/>}/>
      </Route>
    )
  )
  return (
      <RouterProvider router={router}/>
  );
}
