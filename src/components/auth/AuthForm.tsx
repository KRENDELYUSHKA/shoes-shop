import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
const AuthForm = () => {
  return (
    <div>
      <div className="wrap">
        <div className="wrap-auth">
          <div className="wrap-auth-content">
            <div className="wrap-auth-content-title">
              <span>Авторизация</span>
            </div>
            <form action="">
            <div className="wrap-auth-content-login">
                <input type="text" placeholder="Введите почту"/>
            </div>
            <div className="wrap-auth-content-pass">
                <input type="password" placeholder="Введите пароль"/>
            </div>
            <div className="wrap-auth-content-but">
                <input type="submit" value="Войти"/>
            </div>
            </form>
            <div className="wrap-auth-content-reg">
                <Link to="/register">Нет аккаунта? Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
