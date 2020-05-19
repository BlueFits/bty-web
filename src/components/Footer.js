import React from "react";
import { Link } from "react-router-dom";

//CONTROLLERS
import { DefaultTextLight } from "../controllers/textController";

const Footer = () => {
    return (
        <footer className="footer">
            <DefaultTextLight style={styles.defaultText}>Contact Us at BtyDevelopmentTeam@gmail.com</DefaultTextLight>
            <DefaultTextLight style={{...styles.defaultText, margin: "15px 0"}}>Copyright BetterThanYesterday, Inc.</DefaultTextLight>
            <div className="legal-notices">
                <DefaultTextLight style={styles.defaultText}><Link to="/" className="footerLinks">Home</Link></DefaultTextLight>
                <DefaultTextLight style={{...styles.defaultText, ...styles.footerNav}}><Link to="/terms_and_conditions" className="footerLinks">Terms & Conditions</Link></DefaultTextLight>
                <DefaultTextLight style={styles.defaultText}><Link to="/privacy" className="footerLinks">Privacy</Link></DefaultTextLight>
            </div>
        </footer>
    );
};

const styles = {
    defaultText: {
        color: "#fff",
        padding: "0 15px",
    },
    footerNav: { 
        borderLeft: "1px solid",
        borderRight: "1px solid",
    }
};

export default Footer;