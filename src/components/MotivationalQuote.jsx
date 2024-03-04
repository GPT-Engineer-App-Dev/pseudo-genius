import React from "react";
import { Box, Text } from "@chakra-ui/react";

const quotes = ["Don't watch the clock; do what it does. Keep going.", "The secret of getting ahead is getting started.", "It's not whether you get knocked down, it's whether you get up.", "The only way to do great work is to love what you do.", "You are never too old to set another goal or to dream a new dream."];

const MotivationalQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Box p={5} bg="blue.100" borderRadius="md" my={5} textAlign="center">
      <Text fontSize="xl" fontWeight="bold">
        Motivational Quote
      </Text>
      <Text fontStyle="italic" color="gray.700">
        "{randomQuote}"
      </Text>
    </Box>
  );
};

export default MotivationalQuote;
