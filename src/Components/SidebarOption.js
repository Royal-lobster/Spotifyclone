import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={!active ? "sidebarOption" : "sidebarOption--active"}>
      {Icon && <Icon className="sidebarOption__icon" />}
      <h3
        className={
          !Icon
            ? "sidebarOptions__textWithoutIcon"
            : "sidebarOptions__textWithIcon"
        }
      >
        {text}
      </h3>
    </div>
  );
}

export default SidebarOption;
