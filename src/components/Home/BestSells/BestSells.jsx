import img from "../../../assets/mid_headphone.png";
import "./BestSells.css"

const BestSells = () => {
    return (
        <div className="container Discount p-5 py-5 py-md-0 px-md-5 my-0 my-md-5">
            <div className="row align-items-center">
                {/* Text content on the left */}
                <div className="Discount_col1 col-md-6">
                    <h6 className="main_label pb-3">
                        <i className="fa-solid fa-star"></i> Top Products of the Month
                    </h6>
                    <h2 className="fw-bold">Micropack MHP Headphone Black</h2>
                    <p className="py-3">
                        Get the best discounts on top brands. Shop now!
                    </p>
                    <div className="banner_btns">
                        <button className="main_btn">Shop Now</button>
                    </div>
                </div>

                {/* Image on the right */}
                <div className="col-md-6 pt-5 pt-md-0">
                    <img src={img} alt="Headphone" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default BestSells;
