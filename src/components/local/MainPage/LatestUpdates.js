import React, { useState } from "react";
import validator from "validator";
import { DefaultTextSemiBold, ErrorMsg } from "../../../controllers/textController";
import mail from "../../../assets/images/mail.png";
//CONSTANTS
import Colors from "../../../constants/Colors";
//COMPONENTS
import FadeInSection from "../../containers/FadeInSection";
//Servers
import Server from "../../../config/Server";

const LatestUpdates = () => {
    //Init
    const [email, setEmail] = useState("");
    const [error_msg, setError_Msg] = useState("");
    const [success_msg, setSuccess_Msg] = useState("");
    //Handlers
    async function submitHandler(e) {
        
        e.preventDefault();
        //alert(email);
        setEmail("");
        if (!validator.isEmail(email) || validator.isEmpty(email)) {
            setError_Msg("Something went wrong, please try again");
        } else {
            const response = await fetch(Server + "utils/collect_email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email
                }),
            });

            if (!response.ok) {
                const errResData = await response.json();
                setError_Msg("");
                setError_Msg(errResData.msg);
            } else {
                const resData = await response.json();
                setError_Msg("");
                setSuccess_Msg(resData.msg);
            }
        }
        
    };
    
    return (
        <section className="latestUpdatesContainer">
            <div className="latestUpdatesContents">
                <FadeInSection>
                    <img src={mail} alt="mail" className="mailPng"/>
                </FadeInSection>

                <div className="latestUpdatesTxt">
                    <DefaultTextSemiBold>Want to know about our latest updates?</DefaultTextSemiBold>
                </div>

                <form onSubmit={submitHandler}>
                    <input 
                        value={email} 
                        style={styles.input} 
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button style={styles.button}>SUBMIT</button>
                </form>
                <div style={styles.fixSpacingIssue}>
                    <ErrorMsg>{error_msg}</ErrorMsg>
                    <DefaultTextSemiBold>{success_msg}</DefaultTextSemiBold>
                </div>
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
        outline: "none",
    },
    fixSpacingIssue: { 
        height: "30px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" ,
    },
};

export default LatestUpdates;