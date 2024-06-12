import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://5.35.91.86:3002/api/auth/register", {
        username,
        password,
      });
      // console.log(res.data); веб токен
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <title>Решистрация</title>
          <body className="login-page"></body>
        </Helmet>
        <div className="circle"></div>
        <NavLink to="/">
          <img className="logo" src="./img/logo-white.png" alt="logo" />
        </NavLink>
        <div className="registration">
          <img className="kros" src="/img/kross.png" alt="logo" />
          <form className="form-login" action="" onSubmit={handleSubmit}>
            <img className="log" src="./img/login.png" alt="" />
            <input
              type="text"
              placeholder="Логин"
              name=""
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              src="./img/men.png"
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </main>
    </>
  );
}
