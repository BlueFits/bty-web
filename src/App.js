import React from "react";
import './stylesheets/styles.css';
//COMPONENTS
import Layout from "./components/Layout";
import MainSection from "./components/mainPage/MainSection";
import LatestUpdates from "./components/mainPage/LatestUpdates";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Layout>
                <main>
                    <MainSection />
                    <LatestUpdates />
                </main>
            </Layout>
            <Footer /> 
        </div>
    );
};

export default App;