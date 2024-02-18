import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display={["none", "block"]}
      bg="#030d19"
      color="white"
      borderRight="1px"
      borderColor="#6aa7f8"
      p="20px"
      w="250px"
      minH="100vh"
    >
      <Box display="flex" flexDirection="column" gap="20px">
        <Input borderColor="#6aa7f8" placeholder="Search" />
        <Button
          _hover={{ bg: "#6aa7f8" }}
          color="white"
          border="1px"
          borderColor="#6aa7f8"
          onClick={() => navigate("/")}
          variant="outline"
          w="100%"
        >
          Dashboard
        </Button>
        <Button
          _hover={{ bg: "#6aa7f8" }}
          color="white"
          border="1px"
          borderColor="#6aa7f8"
          variant="outline"
          onClick={() => navigate("/converter")}
          w="100%"
        >
          Create Summary
        </Button>
        <Button
          _hover={{ bg: "#6aa7f8" }}
          onClick={() => navigate("/history")}
          color="white"
          border="1px"
          borderColor="#6aa7f8"
          variant="outline"
          w="100%"
        >
          History
        </Button>
        <Button
          _hover={{ bg: "#6aa7f8" }}
          variant="outline"
          color="white"
          border="1px"
          borderColor="#6aa7f8"
          onClick={() => navigate("/uploads")}
          w="100%"
        >
          Uploads
        </Button>
      </Box>
    </Box>
  );
};
