import axios from "axios";

export const fetchSneakers =
  (sortBy = "") =>
  (dispatch) => {
    const url = `http://localhost:3001/sneakers${
      sortBy ? `?_sort=${sortBy}` : ""
    }`;

    axios.get(url).then(({ data }) => {
      dispatch(setSneakers(data));
    });
  };

export const setSneakers = (items) => ({
  type: "SET_SNEAKERS",
  payload: items,
});

export const setSortFilter = (sortBy) => ({
  type: "SET_SORT_FILTER",
  payload: sortBy,
});
