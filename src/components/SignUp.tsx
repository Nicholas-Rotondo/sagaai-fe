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
import React from "react";
import signUpPng from '/Users/nicholasrotondo/sagaai-fe/src/css/img/book.png';

interface SignUpProps {

}

const SignUp: React.FC<SignUpProps> = ({...SignUpProps}) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
      };

      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFullName(event.target.value);
      };

      const processCredentials = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const signUpCredentials = {
            user: {
                email: email,
                username: username,
                password: password,
                full_name: fullName,
                bio: "false",
            }
        }



        axios.post('api/register/', signUpCredentials)
        .then((response) => console.log(response))
        .catch((e) => console.error(e));
      }

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width="50%"  // Half the screen
            bg="white.0" // Just for distinction, can be removed
        >
            <Flex>
                <form onSubmit={processCredentials}>
                    <Stack align="center" paddingTop={3} gap={3} width="80%">
                        {/* Email Input */}
                        <FormControl>
                            <FormLabel htmlFor="Username">Username</FormLabel>
                            <Input 
                                type="username" 
                                id="username" 
                                aria-describedby="email-helper-text" 
                                value={username} 
                                onChange={handleUsernameChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="Password">Password</FormLabel>
                            <Input 
                                type="password" 
                                id="password" 
                                aria-describedby="email-helper-text" 
                                value={password} 
                                onChange={handlePasswordChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="Full Name">Full Name</FormLabel>
                            <Input 
                                type="fullname" 
                                id="fullname" 
                                aria-describedby="email-helper-text" 
                                value={fullName} 
                                onChange={handleFullNameChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="Email">Email address</FormLabel>
                            <Input 
                                type="email" 
                                id="email" 
                                aria-describedby="email-helper-text" 
                                value={email} 
                                onChange={handleEmailChange}
                            />
                        </FormControl>

                    <Button colorScheme='teal' variant='outline' type='submit'>
                        Submit
                    </Button>
                    </Stack>
                </form>
            </Flex>


                  {/* Right Side */}
            <Flex
                justifyContent="center"
                alignItems="center"
                width="50%"
                bg="gray.200"
            >
                <Image 
                src={signUpPng}
                alt="Descriptive Alt Text"
                boxSize="100%"  // Adjust the size as needed
                objectFit="cover" // Adjust how the image should fit in the container
                />
            </Flex>
        </Flex>
    );
}

export default SignUp