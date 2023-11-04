import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import 'react-slideshow-image/dist/styles.css';
import { BlackBanner } from "../BlackBanner/BlackBanner";

const links = [
    {
        to: "/gift-cards",
        title: "Gift Cards"
    },
    {
        to: "/coffees",
        title: "Whole Bean and Ground Coffees"
    },
    {
        to: "/teas",
        title: "Loose Leaf Teas"
    },
    {
        to: "/faQ",
        title: "FAQs"
    },
    {
        to: "/about",
        title: "About Us"
    }
]

const Navbar = () => {
    const cartCount = 0;

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/");
    }   
    return (
        <>
          <BlackBanner/>  
        <div className={styles.navbar}>
            <div onClick={handleRedirect}><img className={styles.logo} src="https://seeklogo.com/images/C/Costa_Coffee-logo-DC0FF384B3-seeklogo.com.png" alt="logo" /></div>
            <div className={styles.links}>
                {
                    links.map(({ to, title }) =>
                        <NavLink
                            key={title}
                            style={{ margin: "20px", color: "black", opacity: "0.8", fontSize: "20px" }}
                            activeStyle={{ color: "blue" }}
                            className={styles.navlink}
                        to={to}>{title}</NavLink>)
                }
            </div>
            <div className={styles.rightIcons}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuYjpySMTH7UOQVw3JU_JijOp0_ybRE8VpA&usqp=CAU" alt="cart-logo" />
                <h2>{cartCount}</h2>
                <h1>Cart</h1>
            </div>
            </div>
        </>
    )
}

export { Navbar };