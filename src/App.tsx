import { Route, Routes } from "react-router-dom";
import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";

const App = () => {

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
