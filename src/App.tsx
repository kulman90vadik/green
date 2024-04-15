import { Route, Routes } from "react-router-dom";
import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import { fetchCollection } from "./redux/slices/catalogClise";
import { RootState, useAppDispatch } from "./redux/store";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import Shop from "./pages/Shop/Shop";
import PageItem from "./pages/PageItem/PageItem";

import Favorites from "./pages/Favorites/Favorites";
import NotFound from "./pages/NotFound/NotFound";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  const dispatch = useAppDispatch();
  const category: number = useSelector((state: RootState) => state.catalog.category);
  const sortId: string = useSelector((state: RootState) => state.catalog.sortId);
  const page: number = useSelector((state: RootState) => state.catalog.page);
  const lengthCatalog: number = useSelector((state: RootState) => state.catalog.lengthCatalog);
  const limitBol: number = useSelector((state: RootState) => state.catalog.limit);

  useEffect( () => {  
      let categoryId = category ? `&category=${category}` : "";
      let limit = limitBol ? `limit=5` : "";
      let pageIndex = page ? `&page=${page}` : "";
      let sort = sortId ? `&sortBy=price&order=${sortId}` : '';
      dispatch(fetchCollection({categoryId, sort, pageIndex, limit}));
    }, [category, sortId, page, lengthCatalog, limitBol])

  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/item/:id" element={<PageItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </>
  )
}

export default App
