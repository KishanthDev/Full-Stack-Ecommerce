import img1 from "../../../assets/black_headphones.png";
import "../Product/NewArrivals.css";

const Arrivals = () => {
    return (
        <div className="py-3 container gx-0 Arrivals">
            <div className="row gx-0 align-items-center Arrivals_main">
                {/* Image on the left */}
                <div className="col-4">
                    <div className="Arrivals_col1 text-center">
                        <img src={img1} alt="Headphones" className="img-fluid" />
                    </div>
                </div>

                {/* Content on the right */}
                <div className="col-8">
                    <div className="Arrivals_col2">
                        <p className="Product_name">Headphones</p>
                        <div className="icons py-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h5 className="Product_price">$ 40</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrivals;
