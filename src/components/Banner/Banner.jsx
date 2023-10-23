import ".//banner.css";
import bannerImg from "assets/banner-img.png";

const Banner = () => {
    return (
        <div className="banner">

            <div className="banner-info">

                <div className="banner-text">
                    <h1>SALES</h1>
                    <p>"Experience audio perfection at AudioVerse. Explore a curated selection of high-quality audio products, from headphones to speakers.Elevate your sound journey with us."</p>
                </div>

                <div className="banner-tags">
                    <a href="/" style={{ color: "white" }}>Read More</a>
                    <a href="/" style={{ backgroundColor: "white", color: "black" }}>Shop Now</a>
                </div>

            </div>

            <div className="banner-img">
                <img src={bannerImg} alt="" />
            </div>

        </div>
    )
}

export default Banner;