import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as PdfIcon } from "../pdf-svgrepo-com.svg";
import axios from "axios";

const Converter = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [images, setImages] = useState([]);

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

  const sendPost = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("http://localhost:8800", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setSummary(res.data.message);
        setImages([res.data.img, res.data.img2]);
      });
  };
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
        <>
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
          <Flex gap="40px">
            {images.map((img, index) => (
              <img
                width="300px"
                height="300px"
                key={index}
                src={img}
                alt="ML generated"
              />
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Converter;
