import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

//rfce

function Header() {
const [ { basket } ] = useStateValue();

  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/*  3 links */}
      <div className="header__nav">
        {/*  1 link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionTop">Hello !</span>
            <span className="header__optionBot">Sing In</span>
          </div>
        </Link>
        {/*  2 link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionTop">Returns</span>
            <span className="header__optionBot">& Orders</span>
          </div>
        </Link>
        {/*  3 link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionTop">Your</span>
            <span className="header__optionBot">Prime</span>
          </div>
        </Link>
        {/*  4 link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/*  Icon */}
            <ShoppingBasketIcon />
            {/*  Number of items */}
            <span className="header__optionBot header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
