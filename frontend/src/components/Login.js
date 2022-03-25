import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleVisiblity = () => {
    setVisible(!visible);
  };

  const handleSubmit = () => {};

  return (
    <VStack>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={visible ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" onClick={handleVisiblity}>
            <Button h="1.5rem" size="sm">
              {visible ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme="blue" width="100%" my="4rem" onClick={handleSubmit}>
        Submit
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        my="4rem"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Login as a Guest User
      </Button>
    </VStack>
  );
}
