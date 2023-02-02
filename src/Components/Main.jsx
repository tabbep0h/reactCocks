import React from 'react'
import { CockBlock,Header } from './index'


function Main({ cocks,cart,setCart }) {

console.log(cart)

  return (
    <div><Header/>
        <div className='main'>
            {
            cocks.map(( item , index) => (
                <CockBlock cart={cart} setCart={setCart} key = {`${item}_${index}`} item={item}/>
            ))
            } 
        </div> 
    </div>

  )
}

export default Main