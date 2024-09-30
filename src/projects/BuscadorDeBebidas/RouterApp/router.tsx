import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import FavoritePage from "../pages/FavoritePage";
import LayoutDrink from "../layouts/LayoutDrink";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDrink />}>
            <Route path="/" element={<IndexPage />} index />
            <Route path="/favoritos" element={<FavoritePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
