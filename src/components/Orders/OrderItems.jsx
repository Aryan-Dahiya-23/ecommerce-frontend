import "../Orders/orders.css";

import { Link } from "react-router-dom";

const OrderItems = () => {

    const info = "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou.";

    return (
        <div className="order-item-container">

            <div className="order-item-top">

                <div className="top-details">
                    <div>ORDER PLACED</div>
                    <div className="colon">:</div>
                    <div>19 DECEMBER 2022</div>
                </div>

                <div className="top-details">
                    <div>TOTAL</div>
                    <div className="colon">:</div>
                    <div>₹1,420.00</div>
                </div>

                <div className="top-details">
                    <div>SHIP TO</div>
                    <div className="colon">:</div>
                    <div>ARYAN DAHIYA</div>
                </div>

                <div className="top-details">
                    <div>ORDER # 405-8165530-4017117</div>
                    <div className="colon">:</div>
                    <Link style={{ textAlign: "center" }} to='/'>View order details</Link>
                </div>
            </div>



            <div className="order-item-bottom">

                <div className="order-item-bottom-container">

                    <div className="order-item-details">
                        <img src="https://ecommerce-backend-4zjj.onrender.com/uploads/products/headphone-prod-5.webp" alt="" />

                        <div className="item-details-description">
                            <div className="order-details-title">boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver</div>
                            <div className="order-details-info">{info}</div>
                        </div>
                    </div>

                    <div className="order-item-price">

                        <div className="item-price">
                            <div>Price:&nbsp;</div>
                            <div>₹2428</div>
                        </div>

                        <div className="item-quantity">
                            <div>Quantity:&nbsp; </div>
                            <div>2</div>
                        </div>

                    </div>
                </div>


                <div className="order-item-bottom-container">

                    <div className="order-item-details">
                        <img src="https://ecommerce-backend-4zjj.onrender.com/uploads/products/headphone-prod-5.webp" alt="" />

                        <div className="item-details-description">
                            <div className="order-details-title">boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver</div>
                            <div className="order-details-info">{info}</div>
                        </div>
                    </div>

                    <div className="order-item-price">

                        <div className="item-price">
                            <div>Price:&nbsp;</div>
                            <div>₹2428</div>
                        </div>

                        <div className="item-quantity">
                            <div>Quantity:&nbsp;</div>
                            <div>2</div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="order-item-total">
                <div className="start">SUBTOTAL : </div>
                <div className="end">₹9999</div>
            </div>

        </div>
    );
}

export default OrderItems;