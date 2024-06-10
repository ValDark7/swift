import React from "react";
import { Helmet } from "react-helmet";
import { Header, Product, SneakersLoading } from "../../components/";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSneakers, setSortFilter } from "../../redux/actions/sneakers";

import Filter from "../../components/Filter/Filter";

import "./store-style.css";
import bd from "./data.json";

function Store() {
  const items = useSelector(({ sneakers }) => sneakers.items);
  const isLoaded = useSelector(({ sneakers }) => sneakers.isLoaded);
  const { sortBy } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSneakers(sortBy));
  }, [dispatch, sortBy]);

  const handleSortChange = (sortBy) => {
    dispatch(setSortFilter(sortBy));
  };

  return (
    <>
      <Helmet>
        <title>Магазин</title>
        <body className="store-page"></body>
      </Helmet>
      <Header />
      <Filter sortBy={sortBy} handleSortChange={handleSortChange} />
      <div className="store">
        <div className="products">
          {isLoaded
            ? bd.sneakers.map(
                //изменить bd.sneakers на items
                (product, index) => (
                  <NavLink
                    preventScrollReset={false}
                    key={product.id}
                    to={`/product/${index}`}
                  >
                    <Product
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                    />
                  </NavLink>
                )
              )
            : Array(10).fill(<SneakersLoading />)}
        </div>
      </div>
    </>
  );
}

export default Store;
