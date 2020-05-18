import React from "react";
import "../stylesheets/styles.css";
//CONTROLLERS
import { DefaultTextLight } from "../controllers/textController";

const Footer = () => {
    return (
        <footer className="footer">
            <DefaultTextLight style={styles.defaultText}>Contact Us at BtyDevelopmentTeam@gmail.com</DefaultTextLight>
            <DefaultTextLight style={{...styles.defaultText, margin: "15px 0"}}>Copyright BetterThanYesterday, Inc.</DefaultTextLight>
            <div className="legal-notices">
                <DefaultTextLight style={styles.defaultText}><a>Terms & Conditions</a></DefaultTextLight>
                <DefaultTextLight style={{...styles.defaultText, borderLeft: "1px solid", borderRight: "1px solid" }}><a>Privacy</a></DefaultTextLight>
                <DefaultTextLight style={styles.defaultText}><a>Legal Notice</a></DefaultTextLight>
            </div>
        </footer>
    );
};

const styles = {
    defaultText: {
        color: "#fff",
        padding: "0 15px",
    },
};

export default Footer;