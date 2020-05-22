import React, { useEffect } from "react";
//COMPONENTS
import FadeInLeft from "../../containers/AOS/FadeInFromLeft";
import FadeInRight from "../../containers/AOS/FadeInFromRight";
//CONTROLLERS
import { HeaderText, DefaultText } from "../../../controllers/textController";
//IMAGES
import home from "../../../assets/images/home.png";
import goals from "../../../assets/images/goals.png";
import log from "../../../assets/images/log.png";
import FadeInFromLeft from "../../containers/AOS/FadeInFromLeft";

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
            <div className="howDoesItWork-header">
                <HeaderText>How it works</HeaderText>
            </div>
            <div className="howDoesItWork-container">
                <div className="howDoesItWork-txt-container">
                    <FadeInLeft>
                        <HeaderText>In the home page...</HeaderText>
                    </FadeInLeft>
                    <DefaultText>
                        The home page is where you can add and see your logs. You can
                        check your logs from the previous dates and see also how you did
                        against the yesterday you. Whenever you log a task, you get a point,
                        the points that you accumulated that day will then be used to
                        compare with the points that you accumulated the day before. Your
                        goal is to maintain the points or better yet, obtain more points than you
                        did on the previous date.
                    </DefaultText>
                </div>
                <div className="btyDisplay-container">
                    <img src={home} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                </div>
            </div>
            <div id="howDoesItWorkId-2" className="howDoesItWork-container howDoesItWork-2">
                <div className="howDoesItWork-txt-container">
                    <FadeInRight>
                        <HeaderText>In the goals page...</HeaderText>
                    </FadeInRight>
                    <DefaultText>
                        This is where you set up your goals and the steps that
                        you need to do in order to achieve that goal. Here
                        is also where you can edit existing goals/steps and see both
                        your active and completed goals/steps. 
                    </DefaultText>
                </div>
                <div className="btyDisplay-container">
                    <img src={goals} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                </div>
            </div>
            <div className="howDoesItWork-container">
                <div className="howDoesItWork-txt-container">
                    <FadeInFromLeft>
                        <HeaderText>Logging your tasks...</HeaderText>
                    </FadeInFromLeft>
                    <DefaultText>
                        In here is where you write the specific task that you did for your goal.
                    </DefaultText>
                </div>
                <div className="btyDisplay-container">
                    <img src={log} alt="home" className="btyDisplay" style={{ height: "100%" }}/> 
                </div>
            </div>
        </section>
    );
};

export default HowDoesItWork;