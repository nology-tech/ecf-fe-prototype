import React from "react";
import "./WelcomeHeader.scss";
import UserIcon from "../UserIcon/UserIcon";

const capitalisedNames = name => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const WelcomeHeader = ({ userProfile }) => {
  let displayName = userProfile.displayName || sessionStorage.getItem("displayName");
  
  displayName = displayName.split(" ").map(capitalisedNames).join(" ");

  const userIcon = userProfile.photoURL;

  return (
    <div className="welcome-header">
      <div className="welcome-header__welcome-message">
        <h1 className="welcome-header__welcome-message__title">Welcome Back</h1>
        <h2 className="welcome-header__welcome-message__username">{displayName || "NO NAME"}</h2>
      </div>
      <div className="welcome-header__icon">
        <UserIcon userIcon={userIcon} />
      </div>
    </div>
  );
};

export default WelcomeHeader;
