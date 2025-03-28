import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1" : ""}`}>
            <div className="container gx-0">
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/13944/13944814.png"
                        alt="Menu"
                        width="35"
                        height="35"
                    />
                </button>

                {/* Smooth Transition Menu */}
                <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav_ul py-2 py-md-0">
                        <li className="nav-li">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink to="/products">Product</NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <form className="cart1 d-flex align-items-center mx-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                            width="26"
                            height="26"
                            className="img-small mx-3"
                            alt="User"
                        />
                        <NavLink to="/cart">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                                width="26"
                                height="26"
                                alt="Cart"
                            />
                        </NavLink>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
