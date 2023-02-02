import React from 'react';
import uuid from 'react-uuid';
import { Header } from './index'

function Registration({ propName, propPassword, propEmail, account, setAccount }) {
  const [name, setName] = React.useState(propName);
  const [password, setPassword] = React.useState(propPassword);
  const [email, setEmail] = React.useState(propEmail);
  const [nameIsValid, setNameIsValid] = React.useState(validateName(name));
  const [passwordIsValid, setPasswordIsValid] = React.useState(validatePassword(password));
  const [emailIsValid, setEmailIsValid] = React.useState(validateEmail(propEmail));

  function validateEmail(email) {
    const regExp = /.+@.+\..+/i;
    if (email.match(regExp)) {
      return true;
    }
  }

  function validateName(name) {
    return name.length > 2;
  }
  function validatePassword(age) {
    return +age >= 10;
  }
  function onNameChange(e) {
    const val = e.target.value;
    const valid = validateName(val);
    setName(val);
    setNameIsValid(valid);
  }
  function onPasswordChange(e) {
    const  val = e.target.value;
    const  valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }
  function onEmailChange(e) {
    const  val = e.target.value;
    const  valid = validateEmail(val);
    setEmail(val);
    setEmailIsValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameIsValid === true && passwordIsValid === true && emailIsValid === true) {
      setAccount([...account, { id: uuid(), name: name, password: password }]);
    }
  }

  const  nameColor = nameIsValid === true ? 'green' : 'red';
  const  passwordColor = passwordIsValid === true ? 'green' : 'red';
  const  emailColor = emailIsValid === true ? 'green' : 'red';
  return (
    <div>
     <Header></Header>
      <form onSubmit={handleSubmit}>
        <p><label>Имя:<br />
          <input value={name} onChange={onNameChange} style={{ borderColor: nameColor }}/>
        </label>
        </p>
        <p>
          <label>Почта:<br />
          <input value={email} onChange={onEmailChange} style={{ borderColor: emailColor }}/>
          </label>
        </p>
        <p>
          <label>Пароль:<br />
          <input value={password} onChange={onPasswordChange} style={{ borderColor: passwordColor }}/>
          </label>
        </p>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
}

export default Registration;