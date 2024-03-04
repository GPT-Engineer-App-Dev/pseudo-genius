import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Advertisement = () => {
  return (
    <Box p={5} bg="yellow.200" borderRadius="md" my={5} textAlign="center">
      <Text fontSize="xl" fontWeight="bold">
        🍦 Ice Cream for Sale! 🍦
      </Text>
      <Text>Visit our shop for the best homemade ice cream!</Text>
    </Box>
  );
};

export default Advertisement;
