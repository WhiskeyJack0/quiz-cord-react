import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Stack,
  Center,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

import { useModifyUserContext } from '../../contexts/UserContext';

export function LoginBox({ onClose }) {
  const login = useModifyUserContext();

  const [username, setUsername] = useState('');

  function handleNameInput(event, setUsername) {
    const { value } = event.target;
    setUsername(value);
  }
  return (
    <Stack p={3} spacing="24px">
      <Box>
        <FormLabel htmlFor="username">Name</FormLabel>
        <InputGroup>
          <InputLeftAddon>@</InputLeftAddon>
          <Input
            id="username"
            value={username}
            placeholder="Enter a display name"
            onChange={event => handleNameInput(event, setUsername)}
          />
        </InputGroup>
      </Box>
      <Box>
        <Center>
          <Button onClick={() => {
            login.loginUser(username);
            onClose();}}>Login</Button>
        </Center>
      </Box>
    </Stack>
  );
}

export const LoginModal = ({ isModalOpen, onCloseModal }) => {
  const { isOpen, onClose } = useDisclosure({
    isOpen: isModalOpen,
    onClose: onCloseModal,
  });
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInRight"
      size="sm"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login to continue</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginBox onClose={onClose}/>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
