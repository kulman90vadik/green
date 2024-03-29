import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigarion/Navigation";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import GreenButton from "../components/Btn/GreenButton";
import Search from "./Search/Search";
import IconSearch from "../components/IconSearch/IconSearch";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();
  const basket = useSelector((state: RootState) => state.basket.basket);
  const count = useSelector((state: RootState) => state.basket.count);
  const refCloseSearch = useRef<HTMLDivElement>(null);

  const isMounted = useRef(false);


  // useEffect(() => {
  //   // const clickSortHandler: EventListener  = (event: MouseEventInit) => {
  //   const clickSortHandler = (event: MouseEvent) => {
  //     const e = event as MouseEvent;
  //     console.log(refCloseSearch.current);

      
  //     // if (!refCloseSearch.current) {
  //     if (refCloseSearch.current && !e.composedPath().includes(refCloseSearch.current)) {
  //       setOpenSearch(false);
  //     } else {
  //       console.log('ne')
  //     }
  //   };
  //   document.body.addEventListener("click", clickSortHandler);
  //   return () => {
  //     document.body.removeEventListener("click", clickSortHandler);
  //   };
  // }, []);


  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basket);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [basket]);

  return (
    <>
      <header 
        ref={refCloseSearch}
        className={`header ${
          location.pathname === "/login" ? "header--black" : "header"
        }`}
      >
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img className="header__logo" src="/images/logo.svg" alt="Logo" />
          </Link>
          <Navigation
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
          />

          {location.pathname === "/" && (
            <IconSearch setOpenSearch={setOpenSearch} />
          )}

          <Link to="basket" className="header__icon-basket">
            <div className="header__count">{count}</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z" />
            </svg>
          </Link>

          <Link to="login" className="">
            <GreenButton>
              <svg
                className="button__svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1601 9.10057H7.12598"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.7212 6.67059L17.1612 9.10059L14.7212 11.5306"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6342 5.35823C12.3592 2.3749 11.2425 1.29156 6.80082 1.29156C0.883322 1.29156 0.883322 3.21656 0.883322 8.9999C0.883322 14.7832 0.883322 16.7082 6.80082 16.7082C11.2425 16.7082 12.3592 15.6249 12.6342 12.6416"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Login
            </GreenButton>
          </Link>
        </div>
      <Search setOpenSearch={setOpenSearch} openSearch={openSearch} />
      </header>

    </>
  );
};

export default Header;
