import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../Data/DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          alt={user?.display_name}
          src={
            typeof user?.images[0]?.url == "undefined"
              ? ""
              : user?.images[0].url
          }
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
