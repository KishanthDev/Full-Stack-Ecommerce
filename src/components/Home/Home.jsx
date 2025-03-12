import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import NewArrivals from "../Products/Product/NewArrivals";
import BestSells from "./BestSells/BestSells";
import OrderMethod from "./OrderMethod/OrderMethod";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <Products />
            <NewArrivals />
            <BestSells />
            <OrderMethod/>
        </>
    )
}

export default Home