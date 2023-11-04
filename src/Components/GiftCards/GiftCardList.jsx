import React from "react";
import styles from "./GiftCardList.module.css";

const GiftCardList = ({data}) => {
    const { color, title, logo, system, id } = data;
    return (
        <div style={{ background: color}} className={styles.cardList_wrapper} key={id}>
            <div>
                <h1 style={{float: "left"}}>17 Sep 2020</h1>
                <img className={styles.logo} src={logo} alt="logo"></img>
            </div>
            <div className={styles.caseStudy}>Case Study</div>
            <div className={styles.details}>
                <h1>{title} Gift <br /> Payment</h1>
                <h1>{system} - Mobile</h1>
                
            </div>
        </div>
    )
}
export { GiftCardList };