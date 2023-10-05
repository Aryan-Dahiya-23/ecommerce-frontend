import "../Footer/footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (

        <div className="container">

            <div className="footer">

                <div className="about">

                    <div className="title">About</div>
                    <div className="text"> Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.</div>

                </div>

                <div className="contact">

                    <div className="title">Contact</div>

                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@addev.com</div>
                    </div>

                </div>

                <div className="links">

                    <div className="categories">
                        <div className="title">Categories</div>
                        <div className="text">Headphones</div>
                        <div className="text">Smart Watches</div>
                        <div className="text">Bluetooth Speakers</div>
                        <div className="text">Wireless Earbuds</div>
                        <div className="text">Home Theatre</div>
                        <div className="text">Projectors</div>
                    </div>

                    <div className="pages">
                        <div className="title">Pages</div>
                        <div className="text">Home</div>
                        <div className="text">About</div>
                        <div className="text">Privacy Policy</div>
                        <div className="text">Returns</div>
                        <div className="text">Terms & Conditions</div>
                        <div className="text">Contact Us</div>
                    </div>

                </div>

            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        AUDIOVERSE 2024 CREATED BY AD DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt="Payment" />
                </div>
            </div>

        </div>

    );
}

export default Footer;

// style={{margin : "0.75% 0 0"}}
