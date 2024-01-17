import * as React from 'react';
import loginPng from '/Users/nicholasrotondo/sagaai-fe/src/css/img/login.png';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import FlexHeader from "./Header";
import { Link } from 'react-router-dom';

interface FormProps {}

const Login: React.FC<FormProps> = ({}) => {
  const [email, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
  };

  const processCredentials = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const loginCredentials = {
      user : {
        email: email,
        username: "nicholas2",
        password: password,
        is_staff: false,
      }
  };

    axios.post('/api/login/', loginCredentials)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
  }

  return (
    <Flex height={"100%"} width={"100%"}>
      <FlexHeader/>
      {/* Left Side */}
      <Flex
        justifyContent="center"
        alignItems="center"
        width="50%"  // Half the screen
        height={"100%"}
        bg="white.0" // Just for distinction, can be removed
      >
        <form onSubmit={processCredentials}>
            <Stack align="center" paddingTop={3} gap={3} width="80%">
              {/* Email Input */}
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input 
                  type="email" 
                  id="email" 
                  aria-describedby="email-helper-text" 
                  value={email} 
                  onChange={handleUsernameChange}
                />
              </FormControl>

              {/* Password Input */}
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input 
                  type="password" 
                  id="password" 
                  aria-describedby="password-helper-text"
                  value={password} 
                  onChange={handlePasswordChange}
                />
              </FormControl>

              {/* Submit Button */}
              <Button colorScheme='teal' variant='outline' type='submit'>
                Submit
              </Button>

              <Link to='/signup'>
                <Button>
                  Not a user. Create an Account!
                </Button>
              </Link>
            </Stack>
        </form>
      </Flex>
      

      {/* Right Side */}
      <Flex
        justifyContent="center"
        alignItems="center"
        width="50%"
        height="100%"
        bg="gray.200"
      >
        <Image 
          src={loginPng}
          alt="Descriptive Alt Text"
          boxSize="100%"  // Adjust the size as needed
          objectFit="cover" // Adjust how the image should fit in the container
        />
      </Flex>
    </Flex>
  );
};

export default Login;
