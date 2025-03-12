import React from "react";

const NewsLetter = () => {
    return (
        <>
            <div className="NewLetter py-5">
                <div className="container gx-0">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="NewLetter_col1">
                                <h1>Join Us & Get Updates</h1>
                                <p>Sign up for exclusive offers ,latest news and updates</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="NewLetter_col2">
                            <form action="">
                                <div className="form-input d-flex">
                                    <input type="email" placeholder="Enter your Email" 
                                    className="form-control mx-3"/>
                                    <button type="submit" className="main_btn rounded-5">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter