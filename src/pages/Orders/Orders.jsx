import { Helmet } from "react-helmet";
import { Header, ProfileSidebar } from "../../components/";
import "./style-orders.css";

function Orders() {
  return (
    <>
      <Helmet>
        <title>Заказы</title>
        <body></body>
      </Helmet>
      <Header />
      <div className="container-orders">
        <ProfileSidebar />
        <div className="all-orders">
          <div>
            <h3>Активные заказы</h3>
            <p>Заказов нет😔</p>
          </div>
          <div>
            <h3>История заказов</h3>
            <p>Заказов нет😔</p>
          </div>
          <img className="package" src="/img/package.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Orders;
