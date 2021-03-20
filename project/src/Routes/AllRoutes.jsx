import React from "react";
import { Route, Switch } from "react-router";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { GiftCard } from "../Components/GiftCards/GiftCard";
import { HomePage } from "../Components/HomePage";
import { Navbar } from "../Components/Navbar/Navbar";

const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route exact path="/gift-cards">
                    <GiftCard/>
                </Route>
                <Route exact path="/coffees"></Route>
                <Route exact path="/teas"></Route>
                <Route exact path="/faQ"></Route>
                <Route exact path="/error-404">
                    <ErrorPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </>
    )
}

export { AllRoutes };