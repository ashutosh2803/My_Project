import React from "react";
import { Route, Routes } from "react-router";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { GiftCard } from "../Components/GiftCards/GiftCard";
import { HomePage } from "../Components/HomePage";
import { Navbar } from "../Components/Navbar/Navbar";

const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route
                    path="gift-cards"
                    element={<GiftCard />}
                    />
                    <Route path="coffees" element={<></>} />
                </Route>
                <Route path="teas" element={<></>} />
                <Route path="faQ" element={<></>} />
                <Route
                    path="error-404"
                    element={<ErrorPage/>}
                />
            </Routes>
        </>
    )
}

export { AllRoutes };