import React from "react";
import style from "./NavbarEC.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import logoStore from "../../assets/images/Sector 477.png";

const NavbarEC = () => {
  return (
    <>
      <nav className={style.navBar}>
        <a href="/">
          <div className={style.weblogo}>
            <img className={style.imgLogo} src={logoStore} alt="Shop Logo" />
          </div>
        </a>

        <div className={style.shoppingCartDiv}>
          <form className={style.shoppingCart}>
            <input
              type="text"
              className={style.searchArea}
              name="searchText"
              placeholder="Search"
            />
            <button className={style.searchButton} type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <a href="/" className={style.cartIcon}>
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarEC;
