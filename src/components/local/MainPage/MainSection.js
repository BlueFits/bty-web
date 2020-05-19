import React, { useState, useLayoutEffect, useEffect } from "react";
import simpleParallax from "simple-parallax-js";
import LogoNoTxt from "../../../assets/images/LogoNoTxt.svg";
import CloudsAssetSVG from "../../../assets/images/clouds-adjust.svg";
import LogoNoTrail from "../../../assets/images/LogoNoTrail.svg";
import rocketTrail from "../../../assets/images/rocketTrail.svg";
import googleCTA from "../../../assets/images/GooglePlayCTA.svg";
import appleCTA from "../../../assets/images/AppleCTA.svg";
import phone from "../../../assets/images/phoneHome.png";
//CONTROLLERS
import { HeaderText, SmallText } from "../../../controllers/textController";

const MainSection = () => {
    //CONSTANTS
    const windowHeight = useWindowSize(useLayoutEffect, useState)[1];
    const windowWidth = useWindowSize(useLayoutEffect, useState)[0];

    //useEffect
    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.getElementById("parallax");
            let offset = window.pageYOffset;
            console.log(offset);
            parallax.style.backgroundPositionY = offset * -0.3 + "px";;
        }
        
        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        }
    }, []);

    //Helper Functions
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize)
        }, []);
        return size;
    };

    //Parallax
    new simpleParallax(document.getElementsByClassName("cloudAsset"), {
        scale: 1.3,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    });

    return (
        <section id="parallax" className="mainPage">
            <div>
                <header className="headerContainer" style={{ height: windowHeight * (0.4/3) }}>
                    <div>
                        <div className="headerLogoImgContainer">
                            <img src={LogoNoTxt} alt="LogoNoTxt" className="headerLogoNoTxt"/>
                        </div>
                        <SmallText style={styles.defaultTextColor}>BetterThanYesterday</SmallText>
                    </div>
                    <div>{/* Supposed NAV */}</div>
                </header>

                <div className="mainContent" style={{ height: windowHeight * (2/3) }}>
                    <div className="leftContent">
                        <div className="leftContentInnerContainer">
                            <div className="logo-no-trail-container">
                                <img src={rocketTrail} alt="rocketTrail" className="rocketTrail"/>
                                <img src={LogoNoTrail} alt="LogoNoTrail" className="logo-no-trail"/>
                            </div>

                            <div className="leftContentText">
                                <HeaderText style={styles.headerTextColor}>Be better than you</HeaderText>
                                <HeaderText style={styles.headerTextColor}>were yesterday.</HeaderText>
                            </div>

                            <div className="cta-container">
                                <img src={googleCTA} alt="googleCTA" className="cta-button" />
                                <img src={appleCTA} alt="appleCTA" className="cta-button"/>
                            </div>
                        </div>
                    </div>

                    <div className="rightContent">
                        <div className="phone-container">
                            <img src={phone} alt="phone" className="phonePng"/>
                        </div>
                    </div>
                </div>

                <div className="cloudContainer" style={{ height: windowHeight * (0.6/3) }}>
                    <img src={CloudsAssetSVG} alt="CloudsAssetSVG" style={{ width: windowWidth }} className="cloudAsset" />
                </div>
            </div>
        </section>
    );
};

//INLINE STYLES
const styles = {
    headerTextColor: {
        color: "#fff",
    },
    defaultTextColor: {
        color: "#fff",
    },
};

export default MainSection;