import axios from "axios";

export const getProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token"); // Получение токена из localStorage
    const res = await axios.get("http://localhost:4000/api/profile", {
      headers: {
        "x-auth-token": token,
      },
    });
    dispatch({ type: "GET_PROFILE", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const updateProfile = (profileData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token"); // Получение токена из localStorage
    const res = await axios.put(
      "http://localhost:4000/api/profile",
      profileData,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch({ type: "UPDATE_PROFILE", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
