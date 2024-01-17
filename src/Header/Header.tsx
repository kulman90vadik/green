import { useState } from "react";
import Navigation from "./Navigarion/Navigation";
import { Link } from "react-router-dom";
import "./header.scss";
import GreenButton from "../components/Btn/GreenButton";
import Search from './Search/Search';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const clickSearch = () => {
    window.scrollBy({
      top: 400,
      left: 0,
      behavior: 'smooth',
    });

    // if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		// 	window.scrollBy(0, 650);
    //   console.log('yes')
		// }

    setOpenSearch(true);
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img className="header__logo" src="images/logo.svg" alt="Logo" />
          </Link>
          <Navigation openNavigation={openNavigation} setOpenNavigation={setOpenNavigation} />

          <button className="btn-reset header__search" type="button" onClick={clickSearch} >
            <svg
              className="header__icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z"
                fill="#3D3D3D"
              />
            </svg>
          </button>

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
        </div>
      </header>

      <Search setOpenSearch={setOpenSearch} openSearch={openSearch} />
    
    </>
  );
};

export default Header;
