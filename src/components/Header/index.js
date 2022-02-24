import React from "react";
import "./style.css";

const Header = ({ background }) => {
  console.log(background);
  return (
    <header className={background ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://i.imgur.com/0UBztxi.png" alt="phflix" />
        </a>
      </div>
      <div className="header--user">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="User"
        />
      </div>
    </header>
  );
};

export default Header;
