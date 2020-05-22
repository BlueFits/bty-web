import React, { useEffect } from "react";
import simpleParallax from "simple-parallax-js";
//CONTROLLERS
import { HeaderText, DefaultText } from "../../../controllers/textController";
//IMAGES
import rocketLaunching from "../../../assets/images/rocket-launching-up.svg";
import cloudMini from "../../../assets/images/cloud-mini.png";
const AboutSection = () => {

    //useEffect
    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.getElementById("rocket-launch");
            let offset = window.pageYOffset;
            let offsetModified = offset * -0.2;
            let offsetToUse = offsetModified <= (-273) ? -273: offsetModified;
            parallax.style.top = offsetToUse + "px";
        }
        
        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        }
    }, []);

    //Parallax
    new simpleParallax(document.getElementsByClassName("mini-cloud"), {
        scale: 1.3,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    });

    return (
        <section id="about" className="about-section">
            <div className="about-contents-container">
                <div className="leftContent about-leftContent" style={{ alignItems: "center" }}>
                    <div className="rocket-circle">
                        <div style={{ borderRadius: 225, overflow: "hidden" }}>
                            <img src={cloudMini} alt="circle-space-backdrop" style={{ width: "100%"}} className="cloudAsset mini-cloud"/>
                        </div>
                        <img id="rocket-launch" src={rocketLaunching} alt="rocket-launching-up" className="about-rocket"/>
                    </div>
                </div>
                <div className="rightContent about-rightContent">
                    <div style={styles.aboutHeader}>
                    <HeaderText>About BetterThanYesterday</HeaderText>
                    </div>
                    <div style={styles.aboutTxt}>
                        <DefaultText>
                            Self improvement is hard. Our answer, is to help you build momentum by striving to
                            be better than yesterday.
                        </DefaultText>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    aboutHeader: {
        width: "500px",
        margin: "10px 0",
    },
    aboutTxt: {
        width: "500px",
    }
};

export default AboutSection;