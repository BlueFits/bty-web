import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//PAGES
import MainPage from "./mainPage/Index";
import Privacy from "./disclaimers/Privacy";
import TermsAndConditions from "./disclaimers/TermsAndConditions";
//FOOTER
import Footer from "./Footer";

const NavigationContoller = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/terms_and_conditions">
                        <TermsAndConditions />
                    </Route>
                    <Route path="/privacy">
                        <Privacy />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </div>
            <Footer />    
        </Router>
    );
};

export default NavigationContoller;