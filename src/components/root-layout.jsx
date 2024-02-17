import React from "react";
import { SideBar } from "./side-bar";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <Flex w="100%">
      <SideBar />
      <Box p="40px" w="100%">
        <Outlet />
      </Box>
    </Flex>
  );
};
