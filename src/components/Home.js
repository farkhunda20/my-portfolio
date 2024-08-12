import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="info">
        <h3 className="intro--title">Hi, I'm Farkhunda</h3>
        <h1>Frontend Developer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          quas. Amet soluta assumenda cum?
        </p>
        <button className="contactMe"> Contact Me</button>
      </div>
      <div className="img-container">
        <img src="/images/portrait-elegant-professional-businesswoman.jpg.png"></img>
      </div>
    </div>
  );
};

export default Home;
