import React from "react";
import img1 from "../../../assets/categorys/headphones.png"
import "./Category.css"
const Category = ()=>{
    return(
    <>
    <div className="py-3 container gx-0 py-5 my-5 Full_main_category">
        <h2 className="p-md-3 main_h2">Categories</h2>
        <div className="row gx-0 main_category">
            <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
                {/*********************************/}
                <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
                {/*********************************/}
                <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
                {/*********************************/}
                <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
                {/*********************************/}
                <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
                {/*********************************/}
                <div className="col-md-2 col-6">
                <div className="home_category text-center">
                    <img src={img1} alt="" />
                    <h5 className="category_title">Category</h5>
                </div>
                </div>
            </div>
        
    </div>
    </>
    )
}

export default Category