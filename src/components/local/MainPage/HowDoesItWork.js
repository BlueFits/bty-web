import React, { useEffect } from "react";
import { isMobileOnly, MobileOnlyView, BrowserView, isMobile } from "react-device-detect";
//COMPONENTS
import FadeInLeft from "../../containers/AOS/FadeInFromLeft";
import FadeInRight from "../../containers/AOS/FadeInFromRight";
//CONTROLLERS
import { HeaderText, DefaultText } from "../../../controllers/textController";
//IMAGES
import home from "../../../assets/images/home.png";
import goals from "../../../assets/images/goals.png";
import log from "../../../assets/images/log.png";
import mobileGoals from "../../../assets/images/mobile-goals.png";

const HowDoesItWork = () => {

    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.getElementById("howDoesItWorkId-2");
            let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = offset * -0.2 + "px";;
        }
        
        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        }
    }, []);

    return (
        <section id="howItWorks" className="howDoesItWork-section">
            <div className="howItWorks-header">
                <HeaderText>Become the best version of yourself</HeaderText>
            </div>
            <div className="howDoesItWork-container">
                <div className="howDoesItWork-txt-container">
                    <div className="howDoesItWrk-length-controller">
                        <FadeInLeft>
                            <HeaderText>Stay Consistent</HeaderText>
                        </FadeInLeft>
                        <DefaultText>
                            You are given points based on your activities in the current day, where
                            it is then compared to your points on the previous day.
                        </DefaultText>
                    </div>
                </div>
                <div className="btyDisplay-container">
                    <img src={home} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                </div>
            </div>
            <div id="howDoesItWorkId-2" className="howDoesItWork-container howDoesItWork-2">
                <div className="howDoesItWork-txt-container" style={styles.rowReverseStylesTxt}>
                    <div className="howDoesItWrk-length-controller">
                        <FadeInRight>
                            <HeaderText>Set your goals</HeaderText>
                        </FadeInRight>
                        <DefaultText>
                            After setting a goal you will have to add the necessary small steps
                            that are needed in order to achieve the goal. 
                        </DefaultText>
                    </div>
                </div>
                <div className="btyDisplay-container" style={styles.rowReverseStylesDisplay}>
                    <BrowserView style={{ height: "100%" }}>
                        <img src={goals} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                    </BrowserView>
                    <MobileOnlyView style={{ height: "100%" }}>
                        <img src={mobileGoals} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                    </MobileOnlyView>
                </div>
            </div>
            <div className="howDoesItWork-container">
                <div className="howDoesItWork-txt-container">
                    <div className="howDoesItWrk-length-controller">
                        <FadeInLeft>
                            <HeaderText>Be accountable</HeaderText>
                        </FadeInLeft>
                        <DefaultText>
                            Say the specific task that you did in order to learn the skill or acheive the goal.
                        </DefaultText>
                    </div>
                </div>
                <div className="btyDisplay-container">
                    <img src={log} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                </div>
            </div>
        </section>
    );
};

const styles = {
    rowReverseStylesTxt: { 
        alignItems: isMobileOnly ? "center" : "flex-start", 
        padding: isMobileOnly ? "0px": "0px 0px 0px 112.5px" 
    },
    rowReverseStylesDisplay: { 
        padding: isMobileOnly ? "0px" : "0px 112.5px 0px 0px", 
        justifyContent: isMobile ? "center" : "flex-end" 
    },
};

export default HowDoesItWork;