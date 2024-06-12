import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login-style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://5.35.91.86:4000/api/auth/login", {
        username,
        password,
      });
      // console.log(res.data); веб токен
      localStorage.setItem("token", res.data.token);
      history("/");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError("Login failed");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Login</title>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id=""
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            src="./img/men.png"
          />
          <img className="login-img" src="./img/men.png" alt="" />
          <img className="pass-img" src="./img/logo-pass.png" alt="" />
          <button className="login" type="submit">
            Войти
          </button>
          <NavLink to="/Rregistration">
            <button>Зарегистрироваться</button>
          </NavLink>
          <div className="error">{error && <p>{error}</p>}</div>
        </form>
      </div>
    </main>
  );
}

export default Login;
