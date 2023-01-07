import React from "react";
import { cssTransition } from "react-toastify";
import "./styles.css";

const Banner = () => {
    const handleClick = () => {
      window.scrollTo({
        top:670,
        behavior:'smooth'
      })
    }
  
  return (
    
    <>
      <main id="banner_main">
        <div className="banner_container">
          <h2>
            Choose <span>Healthy</span> Be <span>Strong</span> Live long
          </h2>
          <p>Food that's good for your heart.</p>
          <div className="order_btn">
            <button className="normal toast" onClick={handleClick}>
              Order Now
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <img className="circle" src="images/circle.png" alt="" />
        <img src="images/newbanner.jpg" alt="" />
      </main>
    </>

  );
};

export default Banner;
