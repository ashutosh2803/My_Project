import React from 'react';
import styles from "../footer/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div style={{backgroundColor: "grey", height: "2px", marginTop: "5%", marginBottom: "5%"}}></div>
            <div className={styles.footerDetails}>
                <div className={styles.links}>
                    <h1>Quick Links</h1>
                    <p>Manage your Subscriptions</p>
                    <p>My Account</p>
                    <p>Gift Cards</p>
                    <p>Terms of Service</p>
                    <p>Refund Policy</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                </div>
                <div className={styles.availability}>
                    <h1>Product Availability</h1>
                    Available on <span style={{textDecoration: "underline",cursor: "pointer", fontWeight: 500}}>Amazon Prime,</span><span style={{fontWeight: 500,cursor: "pointer"}}> Target.com, and </span><span style={{textDecoration: "underline", fontWeight: 500,cursor: "pointer"}}>select Target and Whole Foods Markets across<br/> the US.</span> Also served in select independently owned restaurants, and coffee shops across the US.
                </div>
            </div>
            <div style={{backgroundColor: "grey", height: "2px", marginTop: "5%", marginBottom: "5%"}}></div>
            <div className={styles.logos}>
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/facebook-official-512.png" alt="footer-logo" />
                <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-twitter-1.png" alt="footer-logo" />
                <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-instagram-11.png" alt="footer-logo" />
                <img src="https://www.pngfind.com/pngs/m/112-1127754_youtube-svg-png-icon-free-download-black-youtube.png" alt="footer-logo" />
            </div>
            <div className={styles.copyright}><p>{'\u00A9'} 2021, COSTA COFFEE SPECIALITY BREVERAGES</p></div>
        </div>
    )
}
export { Footer };