import React from "react";
import axios from 'axios';
import {
    Input,
    Flex,
    VStack,
    Button,
  } from "@chakra-ui/react";


interface ImageContainerProps {
    backgroundColor?: string; // Added backgroundColor property
}

const ImageContainer: React.FC<ImageContainerProps>  = ({...ImageContainerProps}) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
      };

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!selectedFile) {
          alert('No file selected');
          return;
        }
      
        const formData = new FormData();
        formData.append('file', selectedFile);
      
        // Replace 'your-upload-url' with your actual URL
        axios.post('/uploadStory', formData)
          .then(response => {
            // Handle the response here (e.g., show success message)
            alert('File uploaded successfully');
          })
          .catch(error => {
            // Handle the error here (e.g., show error message)
            alert('File upload failed');
          });
      };

    return (
        <Flex
        justifyContent="center"
        alignItems="center"
        bg="white.0" // Just for distinction, can be removed
      >
            <VStack as="form" onSubmit={handleSubmit} spacing={4}>
                <Input type="file" onChange={handleFileChange} />
                <Button type="submit" colorScheme="blue">Upload</Button>
            </VStack>
        </Flex>
    );
}

export default ImageContainer;