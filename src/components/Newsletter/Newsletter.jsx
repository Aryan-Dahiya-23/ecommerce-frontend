import "../Newsletter/newsletter.css";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="newsletter">

            {/* <img src={newsletterImg} alt="" /> */}

            <div className="newsletter-info">
                <h4 style={{ marginBottom: '5px' }}>NEWSLETTER</h4>
                <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>

                <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Subscribe</button>
                </form>

                <p style={{ fontSize: "0.9rem", marginTop: "7.5px" }}>Will be useed in accordance with our Privacy Policy</p>

                <span className="social-icons">

                 <div className="icon" style={{marginLeft: "0px"}}>
                        <FaFacebookF size={14} />
                    </div>

                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>

                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>

                    <div className="icon" style={{marginRight: "0px"}}>
                        <FaLinkedinIn size={14} />
                    </div>

{/*                       <div className="icon" style={{ marginLeft: "0px" }}>
                        <a
                           href="https://www.facebook.com/profile.php?id=100010911464728&mibextid=LQQJ4d"
                           style={{ textDecoration: 'none', color: 'inherit' }}
                         >
                            <FaFacebookF size={14} />
                        </a>
                     </div>

                    <div className="icon">
                     <a
                       href="https://x.com/aryan0505?s=21&t=7o3raGmwPwkzIDMg4NOEKQ"
                       style={{ textDecoration: 'none', color: 'inherit' }}
                     >
                        <FaTwitter size={14} />
                     </a>
                   </div>

                   <div className="icon">
                    <a
                      href="https://instagram.com/aryan___2305?igshid=OGQ5ZDc2ODk2ZA=="
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                       <FaInstagram size={14} />
                    </a>
                  </div> */}

                  <div className="icon" style={{ marginRight: "0px" }}>
                    <a
                      href="https://www.linkedin.com/in/aryan-dahiya-a72320249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                       <FaLinkedinIn size={14} />
                    </a>
                 </div>

                </span>

            </div>

        </div>
    );

}

export default Newsletter;
