import React, { useState, useEffect, useContext } from "react";
import Header from "components/Header/Header";
import Product from "components/Product/Product";
import Newsletter from "components/Newsletter/Newsletter";
import Footer from "components/Footer/Footer";
import { AuthContext } from "../contexts/AuthContext.jsx";


const ProductsPage = () => {

    const { products, setProducts } = useContext(AuthContext);

    useEffect(() => {
        fetchProducts();
        scrollToTop();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:4000/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <div>
            <Header />
            <div className="related-products" style={{ fontWeight: 'bold', fontSize: "1.5rem" }}>PRODUCTS</div>

            {!products ? (
                <div>Loading...</div>
            ) : (
                <Product products={products} />
            )}
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductsPage;
