import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import OrderItems from "./OrderItems";

const Orders = () => {

    const { user, setUser } = useContext(AuthContext);

    let orders;

    if(user.orders){
        orders = user.orders;
    }

    //  orders = [
    //     {
    //         orderId: "648c5a91f811f601eed66e6d",
    //         orderDate: "2023-06-16T12:50:25.172Z",
    //         totalAmount: 1999,
    //         productDetails: [
    //             {
    //                 _id: "648c5a91f811f601eed66e6d",
    //                 name: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Dri…",
    //                 description: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
    //                 price: 1999,
    //                 category: "Headphones",
    //                 imageUrl: "uploads/products/headphone-prod-5.webp",
    //                 color: "green",
    //                 index: 0,
    //                 createdAt: "2023-06-16T12:50:25.172Z",
    //                 quantity: 1
    //             },
    //             {
    //                 _id: "648c5a91f811f601eed66e6d",
    //                 name: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Dri…",
    //                 description: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
    //                 price: 1999,
    //                 category: "Headphones",
    //                 imageUrl: "uploads/products/headphone-prod-5.webp",
    //                 color: "green",
    //                 index: 0,
    //                 createdAt: "2023-06-16T12:50:25.172Z",
    //                 quantity: 1
    //             }
    //         ]
    //     },

    //     {
    //         orderId: "648c5a91f811f601eed66e6d",
    //         orderDate: "2023-06-16T12:50:25.172Z",
    //         totalAmount: 1999,
    //         productDetails: [
    //             {
    //                 _id: "648c5a91f811f601eed66e6d",
    //                 name: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Dri…",
    //                 description: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
    //                 price: 1999,
    //                 category: "Headphones",
    //                 imageUrl: "uploads/products/headphone-prod-5.webp",
    //                 color: "green",
    //                 index: 0,
    //                 createdAt: "2023-06-16T12:50:25.172Z",
    //                 quantity: 1
    //             },
    //             {
    //                 _id: "648c5a91f811f601eed66e6d",
    //                 name: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Dri…",
    //                 description: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
    //                 price: 1999,
    //                 category: "Headphones",
    //                 imageUrl: "uploads/products/headphone-prod-5.webp",
    //                 color: "green",
    //                 index: 0,
    //                 createdAt: "2023-06-16T12:50:25.172Z",
    //                 quantity: 1
    //             }
    //         ]
    //     }
    // ]

    return (
        <div className="orders-container">
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