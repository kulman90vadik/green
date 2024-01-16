import { Route, Routes } from "react-router-dom";
import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import { fetchCollection } from "./redux/slices/catalogClise";
import { RootState, useAppDispatch } from "./redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const App = () => {
  const dispatch = useAppDispatch();
  const category: number = useSelector((state: RootState) => state.catalog.category);

  useEffect( () => {
    
      let categoryId = category ? `category=${category}` : "";
      console.log(categoryId);
      // let orderId = 'hhh';
      // let page = 'ggg'

      dispatch(fetchCollection({categoryId}));
      
      
    }, [category])

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="catalog" element={<Catalog />} /> */}
      {/* <Route path="news" element={<News />} /> */}
      {/* <Route path="basket" element={<Basket />} /> */}
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="/item/:id" element={<CartPage />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </>
  )
}

export default App
