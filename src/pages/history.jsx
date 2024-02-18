import { Badge, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const History = () => {
  const summs = localStorage.getItem("recentSummaries");
  return (
    <Flex direction="column" gap="40px">
      <Heading>Overall History</Heading>
      {JSON.parse(summs)?.length > 0 ? (
        JSON.parse(summs)?.map((sum) => (
          <Box
            bg="#03101c"
            border="1px"
            borderColor="#6aa7f8"
            boxShadow="xs"
            w="100%"
            rounded="8px"
            p="40px"
          >
            {sum}
          </Box>
        ))
      ) : (
        <Badge
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50px"
          colorScheme="red"
          variant="solid"
        >
          Nothing to see{" "}
        </Badge>
      )}
    </Flex>
  );
};

export default History;
