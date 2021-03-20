import React from "react";
import styles from "../Blackbox/Blackbox.module.css";

const Blackbox = () => {
    return (
        <div className={styles.BlackboxWrapper}>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-3c049174--StoreFly-11.png?v=1585637092" alt="blackbox-icon" />
                <h2>Ships Directly To Your Door</h2>
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-79db787d--StoreFly-12.png?v=1585637174" alt="blackbox-icon" />
                <h2>Subscibe & Save! <br/> $1 shipping</h2>
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-d7365b82--StoreFly-13.png?v=1585637190" alt="blackbox-icon" />
                <h2>Gifts for the Coffee Lover on Your <br/> List</h2>
            </div>
        </div>
    )
}
export { Blackbox };