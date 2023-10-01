import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import OrderItems from "./OrderItems";

const Orders = () => {

    const { user, setUser } = useContext(AuthContext);

    let orders;

    if (user.orders) {
        orders = user.orders;
    }

    return (
        <div className="orders-container">
            {orders.length === 0 && <div style={{ margin: "auto", fontFamily: "Roboto", fontSize: "2rem", fontWeight: "bolder" }}>No Order Yet</div>}

            {orders.map((order, index) => (
                <OrderItems
                    key={index}
                    orderId={order.orderId}
                    orderDate={order.orderDate}
                    totalAmount={order.totalAmount}
                    shipTo={user.name}
                    productDetails={order.productDetails}
                />
            ))}
        </div>
    );
}

export default Orders;
