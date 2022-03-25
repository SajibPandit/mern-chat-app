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

export default function SignUp() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState(null);

  const handleVisiblity = () => {
    setVisible(!visible);
  };

  const handleSubmit=()=> {
      console.log(name,email,password,picture)
  }
  return (
    <VStack spacing={5}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
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

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={visible ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" onClick={handleVisiblity}>
            <Button h="1.5rem" size="sm">
              {visible ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="picture" isRequired>
        <FormLabel>Enter profile picture</FormLabel>
        <Input
          type="file"
          p="1.5"
          accept="images/*"
          onChange={(e) => setPicture(e.target.files[0])}
        />
      </FormControl>

      <Button colorScheme="blue" width="100%" my="4rem" onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
}
