import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className = "header">
       <Link to="/"> Главная</Link> 
        <Link to="/cart"> Заказ </Link> 
        <Link to="/login"> Авторизация </Link>
        <Link to="/register"> Регистрация </Link>
    </div>
  )
}

export default Header