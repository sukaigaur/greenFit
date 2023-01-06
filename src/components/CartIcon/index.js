import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../features/cartSlice'
import './styles.css'

const CartIcon = () => {
  const {cart,totalQuantity} = useSelector((state)=>(state.allCart))

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCartTotal())
  },[cart])

  return (
    <div>

      <span class="material-symbols-outlined cart_btn">shopping_cart 
        <span className='cart_circle'>{totalQuantity}</span>
      </span>
    </div>
  )
}

export default CartIcon
