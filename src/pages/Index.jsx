import React, { useState } from "react";
import { Box, Heading, Input, List, ListItem, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import Advertisement from "./Advertisement";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb="8">Todo App</Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton
          icon={<FaPlus />}
          onClick={addTodo}
          aria-label="Add todo"
          sx={{
            background: "linear-gradient(to right, green.400 0%, green.400 50%, red.400 50%, red.400 100%)",
          }}
        />
      </HStack>
      <List spacing={3} my={5} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
            <HStack justify="space-between">
              <Box>{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
