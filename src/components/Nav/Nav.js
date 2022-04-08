import {
  Box,
  Flex,
  Avatar,
  Input,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Heading,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Nav({isLoggedIn, login, username, setUsername, profilePic}) {
    
  function handleNameInput(event){
      const {value} = event.target
      console.log("handlenameinput")
      setUsername(value)
  }  

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Heading>quiz-cord</Heading></Box>

          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                    size={'sm'}
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(profilePic)}`}
                    >                      
                    </Avatar>
                </MenuButton>
                <MenuList alignItems={'center'}>
                    {isLoggedIn ? 
                    <><Center p={10}>
                    <Image
                        size='2xs'
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(profilePic)}`}
                        /> 
                    </Center>
                    <Center>
                        <Text fontSize='2xl'>{username}</Text>
                    </Center></> :
                    <Stack p={3} spacing='24px'>
                        <Box>
                            <FormLabel htmlFor='username'>Name</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>@</InputLeftAddon>
                                <Input
                                id='username'
                                value={username}
                                placeholder='Enter a display name'
                                onChange={(event)=>handleNameInput(event)}
                                />
                            </InputGroup>
                        </Box>
                        <Box>
                            <Center><Button onClick={() =>login(true)} colorScheme='blue'>Login</Button></Center>
                        </Box>
                    </Stack>}
                    <br />
                    <MenuDivider />
                    <MenuItem>Active Quizzes</MenuItem>
                    <MenuItem onClick={() =>login(false)}>Logout</MenuItem>
                    <MenuDivider />
                    <MenuItem>Contact</MenuItem>
                </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}