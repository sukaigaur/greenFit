import React from 'react'
import Card from '../Card'
import MenuTop from '../MenuTop'
import './styles.css'

const MenuSection = () => {

  return (
    <section id='menu_section'>
      <div className='menu_container section-p2'>
        <h4>Menu</h4>
        <img className='menu_icon' src='images/menuicon.png' alt=''/>
      </div>
      <p>Freshly Picked From Farm</p>
      <MenuTop/>
      <Card/>
    </section>
  )
}

export default MenuSection
