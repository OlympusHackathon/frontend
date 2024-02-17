import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const History = () => {
  return (
    <Flex direction="column" gap="40px">
      <Box
        w="100%"
        h="300px"
        bg="#03101c"
        rounded="8px"
        p="40px"
        border="1px"
        borderColor="#6aa7f8"
      >
        First data
      </Box>
      <Box
        bg="#03101c"
        border="1px"
        borderColor="#6aa7f8"
        boxShadow="xs"
        w="100%"
        h="300px"
        rounded="8px"
        p="40px"
      >
        First data
      </Box>
      <Box
        boxShadow="xs"
        w="100%"
        border="1px"
        borderColor="#6aa7f8"
        bg="#03101c"
        h="300px"
        rounded="8px"
        p="40px"
      >
        First data
      </Box>
    </Flex>
  );
};

export default History;
