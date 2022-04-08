import React from 'react';
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
    useDisclosure
  } from '@chakra-ui/react';

function handleNameInput(event, setUsername){
    const {value} = event.target
    console.log("handlenameinput in loginbox")
    setUsername(value)
}  

export function LoginBox({username, setUsername, login}) {
    return(
        <Stack p={3} spacing='24px'>
            <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <InputGroup>
                    <InputLeftAddon>@</InputLeftAddon>
                    <Input
                    id='username'
                    value={username}
                    placeholder='Enter a display name'
                    onChange={(event)=>handleNameInput(event, setUsername)}
                    />
                </InputGroup>
            </Box>
            <Box>
                <Center><Button onClick={() =>login(true)} colorScheme='blue'>Login</Button></Center>
            </Box>
        </Stack>
    )
}

export const LoginModal = ({username, setUsername, login, isModalOpen, onCloseModal}) =>{
    const { isOpen, onClose } = useDisclosure({isOpen:isModalOpen, onClose:onCloseModal})
    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInRight' size='sm'>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Login to continue</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <LoginBox username={username} setUsername={setUsername} login={login}/>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}