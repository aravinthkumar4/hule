import React from "react";
import {
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
  FlashOn,
} from "@material-ui/icons";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon__active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" alt=""/>
    </div>
  );
}

export default Header;
