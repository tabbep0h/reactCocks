import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './index'

function Login({ account, setLogin }) {
  const [name, setName] = React.useState();
  const [password, setPassword] =  React.useState();
  function handleSubmit() {
    console.log(name, password);
    account.map((el) => {
      if (name === el.name && password === el.password) {
        setLogin(true);
      }
    });
  }

  function onPasswordChange(e) {
    let val = e.target.value;
    setPassword(val);
  }
  function onNameChange(e) {
    let val = e.target.value;
    setName(val);
  }

  let nameColor = name === true ? 'green' : 'red';
  let passwordColor = password === true ? 'green' : 'red';
  return (
    <div>
        <Header/>
      <form>
        <p>
          <label>Имя:<br/>
          <input value={name} onChange={onNameChange} style={{ borderColor: nameColor }}/>
          </label>
        </p>
        <p>
          <label>Пароль:<br/>
          <input value={password} onChange={onPasswordChange} style={{ borderColor: passwordColor }}/>
          </label>
        </p>
        <button type="submit" value="отправить" onClick={handleSubmit}>
          <Link to="/">Авторизоваться</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;