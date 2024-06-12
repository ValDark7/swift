import db from "../../pages/Store/data.json";

export const fetchSneakers =
  (sortBy = "") =>
  (dispatch) => {
    const url = `${db.sneakers}${sortBy ? `?_sort=${sortBy}` : ""}`;

    dispatch(setSneakers(url));
  };

export const setSneakers = (items) => ({
  type: "SET_SNEAKERS",
  payload: items,
});

export const setSortFilter = (sortBy) => ({
  type: "SET_SORT_FILTER",
  payload: sortBy,
});
