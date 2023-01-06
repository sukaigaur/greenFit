import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartIcon from '../../components/CartIcon'
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice'
// import { useSelector } from 'react-redux'

import './styles.css'

const Cart = () => {

  const {cart, totalQuantity, totalPrice} = useSelector((state)=>(state.allCart));
  
  const dispatch = useDispatch();

  
  dispatch(getCartTotal());


  return (
    <section id='cart_section'>
        <div className='logo_btn'>
            <img src='images/logo 1.png' alt=''/>
      
            <CartIcon/> 

        </div>
        <div className='order_icon'>
            <h2>Your Order</h2>
            <img src='images/tea_cup.png' alt=''/>
        </div>
        {/* <span>
          <img src='https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png' alt='' />
          <h1>Your Cart is Empty</h1>
        </span> */}
        <div className='order_section'>
          {cart.map((data)=> (
            <div className='order_section_left'>
              <div className='image_name'>
                <img src={data.image} alt=''/>
                <h4 >{data.title}</h4>
              </div>
              <div className='plus_minus_button_div'>
                <div className='plus_minus_button'>
                  <span class="material-symbols-outlined add" onClick={()=>dispatch(increaseItemQuantity(data.id))} >add</span>
                  <h6 className='quantity_no'>{data.quantity}</h6>
                  <span class="material-symbols-outlined remove" onClick={()=>dispatch(decreaseItemQuantity(data.id))}>remove</span>
                </div>
              </div>
            </div>
        
        ))}
        <div className='checkout_section'>
            <h3>Summary</h3>
            <h4>Total Quantity-{totalQuantity}</h4>
            <h4>Total Amount-{totalPrice}</h4>
            <button>Checkout</button>
          </div>
        </div>
    </section>
  )
}

export default Cart
