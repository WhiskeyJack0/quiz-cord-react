import { 
    ReactNode,
    useState,
    useEffect
} from 'react';
import {
  Box,
  Flex,
  Avatar,
  Icon,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {ProfilePicture, customProfilePicture} from '../ProfilePicture/ProfilePicture';

export default function Nav({isLoggedIn, login}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
      console.log("useeffect called")
      isLoggedIn ? 
        setProfilePic(ProfilePicture()):
        setProfilePic('')
  },[isLoggedIn])

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Heading>quiz-cord</Heading></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
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
                  <br />
                  {isLoggedIn ? 
                  <><Center p={10}>
                    <Image
                        size='2xs'
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(profilePic)}`}
                        /> 
                    </Center>
                    <br />
                    <Center>
                        <p>Username</p>
                    </Center></> :
                    <Center>
                        <Button
                            rounded={'full'}
                            color='white'
                            px={6}
                            colorScheme={'blue'}
                            bg={'blue.400'}
                            _hover={{ bg: 'blue.500' }}
                            onClick={()=>login(true)}>
                            Login
                        </Button>
                    </Center>}
                  <br />
                  <MenuDivider />
                  <MenuItem>Active Quizzes</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}