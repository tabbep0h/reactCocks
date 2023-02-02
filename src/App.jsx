import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uuid from "react-uuid";
import { Main, Registration, Login, Cart } from "./Components"
import "./style.css"


function App() {

  const [login, setLogin] = React.useState(false);

  const [ account, setAccount ] = React.useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'zekrin', password: '123' },
  ]);

  const [ cocks, setCocks ] = React.useState([]);

  const [ cart, setCart ] = React.useState([])

  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  React.useEffect(() => {
    fetch(url).then(response => response.json()).then((data1) => {
      setCocks(data1.drinks)
    });
  }, []);
 
 console.log(cocks)

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={ <Main  cart = {cart} setCart = {setCart} cocks = {cocks}/> }></Route>
          <Route path="/login" element={
              <Login
                setLogin={setLogin}
                account={account}
                propName={'admin123'}
                propPassword={'123'}
              />}
          />
          <Route exact path="/register" element={
              <Registration
                propName={''}
                propPassword={''}
                propEmail={''}
                account={account}
                setAccount={setAccount}
              />}>
          </Route>
          <Route exact path="/cart" element={<Cart cart={cart}/>}></Route>
        </Routes>
      </Router>

  );
}

export default App;