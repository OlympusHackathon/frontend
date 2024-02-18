import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as PdfIcon } from "../pdf-svgrepo-com.svg";

const Converter = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

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

  const chooseAnother = () => {
    setFile(null);
    setSummary("");
  };

  const sendPost = () =>
    setSummary(
      "Summary will be here asj dlsaj las;kj k;lasj ;lkash;j ahsjk ahs akjslh kas faskldjf laksjdlk j;alsdj l;asjd lkfsjal jflsadkj flksaj;l jasl;dj flk;asdj ljasdlk jfasd fasdlkj alsdkj lfasdj ;asd lk;jasdl kjl"
    );
  return (
    <Flex
      flexDirection="column"
      mt="100px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      {file ? (
        <Flex
          w="100%"
          gap="20px"
          bg="#03101c"
          rounded="16px"
          p="25px"
          border="1px"
          borderColor="#6aa7f8"
        >
          <PdfIcon />
          <Heading size="md" mb={2} color="white">
            {file.name}
          </Heading>
        </Flex>
      ) : (
        <Heading maxW="800px" textAlign="center">
          Select any pdf (for now) format file and drag it into the box, or
          click on the box to choose from the device
        </Heading>
      )}
      {file ? (
        <>
          {!summary && (
            <Button
              _hover={{ bg: "#6aa7f8" }}
              color="white"
              onClick={sendPost}
              w="200px"
              h="50px"
              border="1px"
              variant="outline"
            >
              Create
            </Button>
          )}
          <Button
            onClick={chooseAnother}
            _hover={{ bg: "#6aa7f8" }}
            color="white"
            w="200px"
            h="50px"
            border="1px"
            variant="outline"
          >
            Choose another
          </Button>
        </>
      ) : (
        <Box
          w={["100%", "400px"]}
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
      )}
      {summary && (
        <Box
          w="100%"
          gap="20px"
          bg="#03101c"
          rounded="16px"
          p="25px"
          border="1px"
          borderColor="#6aa7f8"
        >
          <Heading size="xs" mb={2} color="white">
            {summary}
          </Heading>
        </Box>
      )}
    </Flex>
  );
};

export default Converter;
