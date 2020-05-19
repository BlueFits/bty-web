import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//PAGES
import MainPage from "../pages/MainPage";
import Privacy from "../pages/disclaimers/Privacy";
import TermsAndConditions from "../pages/disclaimers/TermsAndConditions";
import Error from "../pages/Error";
//FOOTER
import Footer from "../components/Footer";

const NavigationContoller = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/terms_and_conditions">
                        <TermsAndConditions />
                    </Route>
                    <Route path="/privacy">
                        <Privacy />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </div>
            <Footer />    
        </Router>
    );
};

export default NavigationContoller;