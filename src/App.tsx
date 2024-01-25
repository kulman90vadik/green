import { Route, Routes } from "react-router-dom";
import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import { fetchCollection } from "./redux/slices/catalogClise";
import { RootState, useAppDispatch } from "./redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Basket from "./pages/Basket.tsx/Basket";
import Shop from "./pages/Shop/Shop";
import PageItem from "./pages/PageItem/PageItem";



const App = () => {
  const dispatch = useAppDispatch();
  const category: number = useSelector((state: RootState) => state.catalog.category);
  const sortId: string= useSelector((state: RootState) => state.catalog.sortId);
  // const price: string= useSelector((state: RootState) => state.catalog.price);

  useEffect( () => {
    
      let categoryId = category ? `category=${category}` : "";
      let sort = sortId ? `&sortBy=price&order=${sortId}` : '';

      dispatch(fetchCollection({categoryId, sort}));
    }, [category, sortId])

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="news" element={<News />} /> */}
      <Route path="basket" element={<Basket />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/item/:id" element={<PageItem />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </>
  )
}

export default App
