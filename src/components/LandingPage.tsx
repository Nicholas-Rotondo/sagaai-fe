import React, { useState } from "react";
import '/Users/nicholasrotondo/sagaai-fe/src/css/LandingPage.css'
import FlexHeader from "./Header";
import Form from "./Form";


interface LandingPageProps {
    backgroundColor?: string; // Added backgroundColor property
}

const LandingPage: React.FC<LandingPageProps>  = ({...LandingPageProps}) => {
    const img1 = require('/Users/nicholasrotondo/sagaai-fe/src/css/img/castle.png')
    const video = require("/Users/nicholasrotondo/sagaai-fe/src/css/img/fantasy.mp4")

    return (
        <div style={{height: "100%", width: "100%"}}>
            <FlexHeader/>
            <Form></Form>
        </div>
    );
}

export default LandingPage;