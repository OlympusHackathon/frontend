import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Converter = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].type !== "application/pdf") {
      alert("Only pdf files are allowed");
    } else {
      const newFile = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      setFile(newFile);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Flex
      flexDirection="column"
      mt="100px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Heading maxW="800px" textAlign="center">
        Select any pdf (for now) format file and drag it into the box, or click
        on the box to choose from the device
      </Heading>
      <Box
        w="400px"
        h="300px"
        bg="#03101c"
        rounded="8px"
        p="40px"
        border="1px"
        borderColor="#6aa7f8"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
      </Box>
    </Flex>
  );
};

export default Converter;
