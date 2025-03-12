import React from "react";
import "./Contact.css"

const AboutAndContact = () => {
    return (
        <div>
            {/* About Us Section */}
            <div className="About">
                <div className="container gx-0">
                    <div className="row gx-0">
                        <div className="col-12">
                            <div className="About_col text-center py-5">
                                <h1 className="main_head">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="contact p-4">
                <div className="container-fluid contact main gx-0">
                    <div className="row gx-5 align-items-center">
                        {/* Left Section: Contact Info & Map */}
                        <div className="col-lg-6">
                            <div className="contact_sec1">
                                <h4 className="contact_h4">Contact Information</h4>
                                <p className="py-4">Fill the form below or write to us. We will help you as soon as possible.</p>

                                <div className="row gx-4">
                                    {/* Phone Section - Light Pink */}
                                    <div className="col-lg-6">
                                        <div className="contact_fm_1 p-3 text-center" style={{ backgroundColor: "#f7c9d2", borderRadius: "10px" }}>
                                            <i className="fa-solid fa-phone fa-2x"></i>
                                            <h4>Phone No</h4>
                                            <h6>+88 01682 825 123</h6>
                                        </div>
                                    </div>

                                    {/* Email Section - Light Blue */}
                                    <div className="col-lg-6">
                                        <div className="contact_fm_2 p-3 text-center" style={{ backgroundColor: "#c9e7f7", borderRadius: "10px" }}>
                                            <i className="fa-solid fa-envelope fa-2x"></i>
                                            <h4>Email</h4>
                                            <h6>EXstore@gmail.com</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-4 mt-4">
                                    {/* Map Section - Light Green */}
                                    <div className="col-lg-12">
                                        <div className="contact_fm_3 p-3 text-center" style={{ backgroundColor: "#d3f7c9", borderRadius: "10px" }}>
                                            <i className="fa-solid fa-location-dot fa-2x"></i>
                                            <h4>Address</h4>
                                            <h6>Abbottabad, Pakistan</h6>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.97328102255!2d73.08828448657466!3d34.17513477655343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad,%20Khyber%20Pakhtunkhwa,%20Pakistan!5e0!3m2!1sen!2s!4v1688829299558!5m2!1sen!2s"
                                                width="100%"
                                                height="250"
                                                style={{ border: 0, borderRadius: "10px" }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Section: Contact Form */}
                        <div className="col-lg-6">
                            <div className="contact_sec2 p-4">
                                <h4>Contact Us</h4>
                                <form action="https://formspree.io/f/myzeyoea" method="POST">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input type="text" className="form-control" id="name" name="name" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            Subject
                                        </label>
                                        <input type="text" className="form-control" id="subject" name="subject" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">
                                            Message
                                        </label>
                                        <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                                    </div>

                                    <button type="submit" className="contact_btn btn btn-primary w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAndContact;
