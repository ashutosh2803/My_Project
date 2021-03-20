import React from "react";
import { Footer } from "../footer/Footer";
import { GiftCardList } from "./GiftCardList";
import data from "./Giftdata.json";

const GiftCard = () => {    
    return (
        <>
            <h1 className="heading">GIFT CARDS</h1>
            {
                data?.map(item => <GiftCardList data={item} />)
            }
            <Footer/>
        </>
    )
}
export { GiftCard };