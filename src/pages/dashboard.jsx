import { Box, Button, Flex, Grid, Heading, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const Dashboard = () => {
  const [userText, setUserText] = useState("");
  return (
    <Flex w="100%" flexDirection="column" gap="40px">
      <Heading>Quick Summary</Heading>
      <Flex
        boxShadow="xs"
        w="100%"
        border="1px"
        borderColor="#6aa7f8"
        bg="#03101c"
        rounded="8px"
        alignItems="center"
        gap="30px"
        pb="30px"
        flexDirection="column"
        placeholder="Enter text for summary"
      >
        <Flex
          flexDirection={["column", "row"]}
          w="100%"
          borderBottom="1px"
          borderColor="#6aa7f8"
          p="40px"
          gap={["20px", "0px"]}
        >
          <Box w="100%" position="relative">
            <Textarea
              boxShadow="xs"
              w="100%"
              border="none"
              bg="black"
              h="300px"
              rounded="8px"
              p="40px"
              roundedRight="0px"
              placeholder="Enter text for summary"
            />
            <HiMiniArrowRightCircle
              style={{
                position: "absolute",
                right: "-25px",
                top: "45%",
                width: "50px",
                zIndex: "2",
                height: "50px",
              }}
            />
          </Box>
          <Box w="100%">
            <Textarea
              boxShadow="xs"
              w="100%"
              border="none"
              roundedLeft="0px"
              bg="black"
              h="300px"
              rounded="8px"
              p="40px"
              isReadOnly
              placeholder="Output summary"
            />
          </Box>
        </Flex>
        <Button
          _hover={{ bg: "#6aa7f8" }}
          color="white"
          w="200px"
          h="50px"
          border="1px"
          variant="outline"
        >
          Generate
        </Button>
      </Flex>
      <Heading>Recent Summaries</Heading>
      <Flex
        boxShadow="xs"
        overflowX={["scroll", "hidden"]}
        w="100%"
        border="1px"
        borderColor="#6aa7f8"
        gap="30px"
        bg="#03101c"
        h="300px"
        rounded="8px"
        p="40px"
      >
        <Box
          boxShadow="xs"
          w={["250px", "100%"]}
          border="1px"
          borderColor="#6aa7f8"
          bg="#03101c"
          rounded="8px"
          p="40px"
        >
          First data
        </Box>
        <Box
          boxShadow="xs"
          w={["250px", "100%"]}
          border="1px"
          borderColor="#6aa7f8"
          bg="#03101c"
          rounded="8px"
          p="40px"
        >
          First data
        </Box>
        <Box
          boxShadow="xs"
          w={["250px", "100%"]}
          border="1px"
          borderColor="#6aa7f8"
          rounded="8px"
          bg="#03101c"
          p="40px"
        >
          First data
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
