import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";

const RegisterForm = () => {
  let history=useNavigate();
  const [data, setData] = useState({
    login: "",
    pass: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm=(e:any)=>{
    e.preventDefault();
    const sendData={
      login:data.login,
      pass:data.pass,
      phone:data.phone,
      email:data.email,
    }
    console.log(sendData);
    axios.post('http://localhost/react-php/insert.php',sendData)
    .then((result)=>{
      if(result.data.Status==='Invalid'){
        alert('Invalid User');
      }
      else{
        history('/')
      }
    })
  }
  return (
    <div>
      <div className="wrap">
        <div className="wrap-auth">
          <div className="wrap-auth-content">
            <form onSubmit={submitForm}>
            <div className="wrap-auth-content-title">
              <span>Регистрация</span>
            </div>
            <div className="wrap-auth-content-login">
              <input
                type="text"
                placeholder="Введите логин"
                name="login"
                onChange={handleChange}
                value={data.login}
              />
            </div>
            <div className="wrap-auth-content-pass">
              <input
                type="password"
                placeholder="Введите пароль"
                name="pass"
                onChange={handleChange}
                value={data.pass}
              />
            </div>
            <div className="wrap-auth-content-pass">
              <input
                type="text"
                placeholder="Введите телефон"
                name="phone"
                onChange={handleChange}
                value={data.phone}
              />
            </div>
            <div className="wrap-auth-content-pass">
              <input
                type="email"
                placeholder="Введите почту"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div className="wrap-auth-content-inp">
              <input type="submit" value="Зарегистрироваться" />
            </div>
            <div className="wrap-auth-content-reg">
              <Link to="/auth">Есть аккаунт? Войти</Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
