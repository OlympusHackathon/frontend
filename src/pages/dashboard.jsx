import { Box, Button, Flex, Heading, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const Dashboard = () => {
  const [userText, setUserText] = useState("");
  const [recentSummaries, setRecentSummaries] = useState([]);

  const handleUserTextChange = (event) => {
    setUserText(event.target.value);
  };

  const handleGenerateSummary = () => {
    // Add your logic for generating the summary here
    // For now, let's set the userText to recentSummaries
    const newGeneratedSummary = userText.trim();
    if (newGeneratedSummary) {
      setRecentSummaries([...recentSummaries, newGeneratedSummary]);
      setUserText(""); // Clear the userText after generating summary
    }
  };

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
              value={userText}
              onChange={handleUserTextChange}
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
              value=""
              isReadOnly
              boxShadow="xs"
              w="100%"
              border="none"
              roundedLeft="0px"
              bg="black"
              h="300px"
              rounded="8px"
              p="40px"
              placeholder="Output summary"
            />
          </Box>
        </Flex>
        <Button
          onClick={handleGenerateSummary}
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
        {recentSummaries.map((summary, index) => (
          <Box
            key={index}
            boxShadow="xs"
            w={["250px", "100%"]}
            border="1px"
            borderColor="#6aa7f8"
            bg="#03101c"
            rounded="8px"
            p="40px"
          >
            {summary}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
