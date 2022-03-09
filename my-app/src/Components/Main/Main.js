import React from "react";
import "./Main.css";

import img from "../Images/Albert-Einstein.jpg";
import SocialMedia from "../SocialMedia/SocialMedia";

const Main = () => {
  return (
    <div className="main">
      <img className="img" src={img} />
      <div className="name">
        <span>Welcome to Samir's Portfolio</span>
      </div>
      <div className='socialmedia'>
           <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};
export default Main;
