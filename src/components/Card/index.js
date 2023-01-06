import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import "./styles.css";

const Card = () => {

  // <div className="card_div"> 
  //       {items.map((item)=>(
    
  //           <Card
  //             key={item.id}
  //             image={item.image}
  //             info={item.info}
  //             title={item.title}
  //             rating={item.rating}
  //             price={item.price}
  //             cart_button={item.cart_button}
  //           />
          
  //       ))}
  //       </div>
  
  const items = useSelector((state)=>state.allCart.items);
  
  const dispatch = useDispatch();
  return (
    <section className="card_section">
      <div className="cards">
        <div className="card_div">
        {items.map((item)=>(
          <div key={item.id} id="card">
          <div className="image_para">
            <img src={item.image} alt="" />
            <h6>{item.info}</h6>
          </div>
          <div className="lower_half">
            <div className="title_rating">
              <h4>{item.title}</h4>
              {item.rating}
            </div>
            <div className="price_btn">
              <h6>{item.dollar}{item.price}</h6>
              <span>
              <button className="normal add_btn" onClick={()=>dispatch (addToCart(item))}>{item.cart_button}</button></span>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Card;
