import React from 'react'
import { CockBlock,Header } from './index'


function Cart( {cart }) {


    console.log(cart)
  return (
    <div>
        <Header/>
    <div className='main'>
        
        {
            cart.map((item,index) => (
                <CockBlock item={item} isCart/>
            ))
        }
    </div>
    </div>
  )
}

export default Cart