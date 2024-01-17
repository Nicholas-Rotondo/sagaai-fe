import React, { useState } from "react";
import '/Users/nicholasrotondo/sagaai-fe/src/css/LandingPage.css'
import { Link } from 'react-router-dom';

import {
    Button,
  } from "@chakra-ui/react";



interface LandingPageProps {
    backgroundColor?: string; // Added backgroundColor property
}

const LandingPage: React.FC<LandingPageProps>  = ({...LandingPageProps}) => {
    const img1 = require('/Users/nicholasrotondo/sagaai-fe/src/css/img/castle.png')
    const video = require("/Users/nicholasrotondo/sagaai-fe/src/css/img/campfire.mp4")

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: -1,
            }}>
                <video 
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                    }} 
                    autoPlay muted loop id="myVideo"
                >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1, // Ensure this is above the video
            }}>
                <Link to='/login'>
                    <Button
                        width={"100px"}
                        variant="outline" // This makes the button have an outline
                        colorScheme="whiteAlpha" // Adjust the color scheme as needed
                        borderColor="white" // Set the border color
                        color="white" // Set the text color
                        _hover={{ bg: 'whiteAlpha.200' }} // Optional: Change background on hover
                    >
                        Enter
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;