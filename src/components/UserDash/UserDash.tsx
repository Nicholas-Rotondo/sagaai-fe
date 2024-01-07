import React from "react";
import {
    Flex,
  } from "@chakra-ui/react";

interface UserDashProps {
    user?: object,
}

const UserDash: React.FC<UserDashProps> = ({...UserDashProps}) => {

    return (
        <Flex        
            justifyContent="center"
            alignItems="center"
            width="50%"  // Half the screen
            bg="white.0" // Just for distinction, can be removed>
        >
            Content
        </Flex>
    );
}

export default UserDash;