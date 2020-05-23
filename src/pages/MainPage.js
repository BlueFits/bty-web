import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import publicIp from "public-ip";
//SERVER
import Server from "../config/Server";
//PAGES
import MainSection from "../components/local/MainPage/MainSection";
import LatestUpdates from "../components/local/MainPage/LatestUpdates";
import AboutSection from "../components/local/MainPage/AboutSection";
import HowDoesItWork from "../components/local/MainPage/HowDoesItWork";

const Index = () => {
    //Scroll to Top
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    useEffect(() => {
        const getIp = async () => {
            const ip = await publicIp.v4();
            const referrer = document.referrer;
            await fetch(Server + "utils/add_visitor_info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ip,
                    referrer,
                }),
            });
        }
        getIp()
    }, []);

    return (
        <main>
            <MainSection />
            <AboutSection />
            <HowDoesItWork />
            <LatestUpdates />
        </main>
    );
}

export default Index;