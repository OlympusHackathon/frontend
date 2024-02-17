import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/dashboard");

  return (
    <Box
      w="100%"
      h="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="500px">
        <Heading>Единная Система Обучения</Heading>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <FormControl>
            <FormLabel>Username:</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input type="password" />
          </FormControl>
          <Box w="100%" display="flex" justifyContent="center" mt="20px">
            <Button type="submit">Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
