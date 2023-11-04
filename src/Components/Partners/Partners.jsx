import React from "react";
import styles from "../Partners/Partners.module.css";

const Partners = () => {
    return (
        <>
            <div className={styles.PartnersHeader}>
                <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/18-512.png" alt="plus-icon" />
                <h1>AS SEEN ON</h1>
            </div>
            <div className={styles.PartnersLogos}>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-a0658f9d--20191225000430YahooFinanceLogo2019.jpg?v=1587567662" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-09f72054--LogoBW-Edited.jpg?v=1587609593" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-2ea0658f--GQBlackAndGoldLogo.png?v=1587567427" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-ef295d54--fortunelogo2016840x485.jpg?v=1595395150" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-54866ff3--1280pxAdAgelogosvg.png?v=1595395236" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-9bf54fc7--Logo15.png?v=1587568675" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-dcf09d38--BELOGO2.jpg?v=1587570175" alt="company names"/>
            </div>
            <div className={styles.PartnersHeader}>
                <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/18-512.png" alt="plus-icon" />
                <h1>NOW AVAILABLE AT THESE RETAILERS</h1>
            </div>
            <div className={styles.PartnersLogos}>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-1567d478--amazonpnglogovector1.png?v=1587261908" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-f69a3d5e--szsumpaignicbeq0ffmo.png?v=1605646821" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-083dfe98--TargetLogo.png?v=1587330617" alt="company names"/>
                <img src="https://cdn.shopify.com/s/files/1/0023/2223/5445/t/6/assets/pf-cd1567d4--WholeFoodsMarket201xlogosvg.png?v=1587261739" alt="company names"/>
            </div>
        </>
    )
}
export { Partners };