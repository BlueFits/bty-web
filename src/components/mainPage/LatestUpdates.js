import React from "react";
import "../../stylesheets/styles.css";
import { DefaultText } from "../../controllers/textController";
import mail from "../../assets/images/mail.png";
//CONSTANTS
import Colors from "../../constants/Colors";

const LatestUpdates = () => {
    return (
        <section className="latestUpdatesContainer">
            <div className="latestUpdatesContents">
                <img src={mail} className="mailPng"/>

                <div className="latestUpdatesTxt">
                    <DefaultText>Want to know about our latest updates?</DefaultText>
                </div>

                <form>
                    <input style={styles.input} placeholder="Email Address"/>
                    <button style={styles.button}>SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

const styles = {
    input: { 
        borderRadius: "5px 0 0 5px", 
        height: "40px", 
        width: "300px"
    },
    button: { 
        borderRadius: "0 5px 5px 0", 
        height: "40px", 
        width: "90px",
        backgroundColor: Colors.primaryA,
        color: "#fff",
    },
};

export default LatestUpdates;