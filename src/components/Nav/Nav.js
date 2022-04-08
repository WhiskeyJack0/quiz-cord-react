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
import {LoginBox} from '../LoginBox/LoginBox';

export default function Nav({isLoggedIn, login, username, setUsername, profilePic}) {

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
                    <LoginBox username={username} setUsername={setUsername} login={login}/>}
                    <br />
                    <MenuDivider />
                    <MenuItem isDisabled={isLoggedIn? false: true}>Create a quiz (unimplemented)</MenuItem>
                    <MenuItem isDisabled={isLoggedIn? false: true}>Active Quizzes (unimplemented)</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() =>login(false)}>Logout</MenuItem>
                </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}