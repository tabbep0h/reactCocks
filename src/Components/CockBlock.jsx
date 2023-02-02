import React from 'react'

function CockBlock({ item, cart, setCart, isCart=false}) {

  const addToCart = () => {
    if (cart.find(x => x.idDrink === item.idDrink) === undefined) {
        setCart([...cart, item])

    }
  }

  const [ count, setCount] = React.useState(0)

  if (count < 0){
    setCount(0)
  }
  return (
    <div className='cock_block'>
        <img  src = {item.strDrinkThumb}></img>
        <p className = "title">{item.strDrink}</p> 
        {!isCart && <><button className='btn' onClick={() => addToCart()}>Заказать</button>  
        <div className='vubor'>
            <p className='clk' onClick={() => setCount(count - 1)}>-</p>
            <p>{count}</p>
            <p className='clk' onClick={() => setCount(count + 1)}>+</p>
        </div></>}
    </div>
  )
}

export default CockBlock