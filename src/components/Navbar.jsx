import React from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" marginBottom="8" borderRadius="md">
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none" }}>
          About
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
