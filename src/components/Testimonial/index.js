import React from 'react'
import './styles.css'

const Testimonial = () => {
  return (
    <section id='test_container'>
        <div className='test_box'>
            <div className='test_item item1'>
                {/* <img src='images/mobile.webp' alt=''/> */}
                <h4>Easy To Order</h4>
                <p>Choose from 5000+ products across food, personal care, household & other categories</p>
            </div>
            <div className='test_item item2'>
                {/* <img src='images/fast_delivery.png' alt=''/> */}
                <h4>Fastest Delivery</h4>
                <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
            </div>
            <div className='test_item item3'>
                {/* <img src='images/quality.png' alt=''/> */}
                <h4>Best Quality</h4>
                <p>Cheaper prices than your local supermarket, great cashback offers to top it off.</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
