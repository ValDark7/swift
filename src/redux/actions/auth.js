import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://5.35.91.86:4000/api/auth/login", {
      username,
      password,
    });
    const { token } = res.data;
    localStorage.setItem("token", token); // Сохранение токена в localStorage
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL" });
    console.error(err);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://5.35.91.86:4000/api/auth/register",
      userData
    );
    const { token } = res.data;
    localStorage.setItem("token", token); // Сохранение токена в localStorage
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "REGISTER_FAIL" });
    console.error(err);
  }
};
