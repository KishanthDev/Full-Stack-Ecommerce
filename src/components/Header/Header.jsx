import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
    const [scrolled,setScrolled] = useState(false)

    const handleScroll = ()=>{
        const offsets = window.scrollY;
        if(offsets>150){
            setScrolled(true) 
        }else{
            setScrolled(false)
        }
        console.log(offsets);
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])
    return <>
        <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1":""}`}>
            <div className="container gx-0">
                <NavLink>
                    <img src={logo} />
                </NavLink>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav_ul">
                        <li className="nav-li">
                            <NavLink>Home</NavLink>
                        </li>
                        <li className="nav-li">
                            <NavLink>About</NavLink>                      
                             </li>
                        <li className="nav-li">
                            <NavLink>Product</NavLink>                       
                            </li>
                        <li className="nav-li">
                            <NavLink>Contact</NavLink>                      
                             </li>
                    </ul>
                    <form className="cart1 d-flex align-items-centre mx-4">
                             <img
                                src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                                width="26"
                                height="26"
                                className="img-small mx-3"
                                />
                             <NavLink>
                                <img
                                src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                                width="26"
                                height="26"
                                />
                             </NavLink>
                             </form>
                </div>
            </div>
        </nav>
    </>
}

export default Header