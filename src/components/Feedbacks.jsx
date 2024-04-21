import React from 'react';
import {Link} from "react-router-dom";
import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    ChakraProvider, Checkbox,
    InputGroup,
    InputLeftElement, theme, ThemeProvider,
    useDisclosure
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Textarea
} from '@chakra-ui/react';
import {EmailIcon,PhoneIcon,CheckIcon} from "@chakra-ui/icons";
import {IconButton} from "@chakra-ui/react";
import {SunIcon} from "@chakra-ui/icons";

import "../styles/feedback.css";


const Feedbacks = () => {

        return (
            <ThemeProvider theme={theme}>
                <div className="containerx">
        <div className="form-container">
        <IconButton aria-label="change-theme"
                    icon = {<SunIcon/>}
                    colorScheme="blue"
                    variant = "outline"
                    size = "lg"
                    style = {{
                    position:"absolute",
                        top:"20px",
                        left:"440px"
                    }}
                    />
            <p className="sing">Sing In To Your Account</p>
            <FormControl>

                <Input type='email' placeholder="Enter your E-mail" htmlSize = {40} width = "auto"
                       style = {{translate:"0% 220%",
                           backgroundColor:"rgba(26,25,25,0.45)",
                           border:"none",
                           color:"white",
                           height:"60px"
                       }}/>
                <Input type='email' placeholder="Enter your password" htmlSize = {40} width = "auto"
                       style = {{translate:"0% 360%",
                           backgroundColor:"rgba(26,25,25,0.45)",
                           border:"none",
                           color:"white",
                           height:"60px"
                       }}/>
                <p className="mail">Email address</p>
                <p className="pass">Password</p>
                <Button colorScheme='green' size='md' style = {{position:"absolute",
                width:"75%",
                border:"none",
                fontSize:"20px",
                top:"390px",
                right:"65px"}}>
                    Confirm
                </Button>
                <Checkbox defaultChecked style = {{position:"absolute",
                top:"350px",
                right:"340px"}}>Checkbox</Checkbox>
                <p style={{fontSize:"16px",
                color:"white",
                position:"absolute",
                top:"350px",
                right:"310px"}}>Remember me</p>
            </FormControl>


        </div>
                </div>
            </ThemeProvider>
    );
};

export default Feedbacks;