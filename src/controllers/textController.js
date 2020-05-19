import React from "react";
import "../stylesheets/textStyles.css";

export const DefaultText = (props) => {
    return (
        <p style={{...props.style}} className="defaultText">{props.children}</p>
    );
};

export const DefaultTextLight = (props) => {
    return (
        <p style={{...props.style}} className="defaultTextLight">{props.children}</p>
    );
};

export const DefaultTextSemiBold = (props) => {
    return (
        <p style={{...props.style}} className="defaultTextSemiBold">{props.children}</p>
    );
};

export const HeaderText = (props) => {
    return (
        <h1 style={{...props.style}} className="headerText">{props.children}</h1>
    );
};

export const SmallText = (props) => {
    return (
        <p style={{...props.style}} className="smallText">{props.children}</p>
    );
}

export const ErrorMsg = (props) => {
    return (
        <p style={{...props.style}} className="errorMsg">{props.children}</p>
    );
}