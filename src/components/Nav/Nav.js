import React from 'react';

import {
  Box,
  Flex,
  Avatar,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { LoginBox } from '../LoginBox/LoginBox';
import {
  useUserContext,
  useModifyUserContext,
} from '../../contexts/UserContext';

export default function Nav() {
  const userProfile = useUserContext();
  const loginContext = useModifyUserContext();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading>
              <Link to="/">quiz-cord</Link>
            </Heading>
          </Box>
          <Box>
            <Heading>
              <Link to="/quiz">Quiz</Link>
            </Heading>
          </Box>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(
                    userProfile.profilePic
                  )}`}
                ></Avatar>
              </MenuButton>
              <MenuList alignItems={'center'}>
                {userProfile.isLoggedIn ? (
                  <>
                    <Center p={10}>
                      <Image
                        size="2xs"
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(
                          userProfile.profilePic
                        )}`}
                      />
                      <Box pos="fixed" right="2" zIndex={2}>
                        <IconButton
                          variant="ghost"
                          isRound={true}
                          aria-label="Change Avatar"
                          fontSize="20px"
                          onClick={() => loginContext.updateProfilePicture()}
                          icon={<FaSyncAlt />}
                        />
                      </Box>
                    </Center>
                    <Center>
                      <Text fontSize="2xl">{userProfile.username}</Text>
                    </Center>
                  </>
                ) : (
                  <LoginBox />
                )}
                <br />
                <MenuDivider />
                <MenuItem isDisabled={userProfile.isLoggedIn ? false : true}>
                  Create a quiz (unimplemented)
                </MenuItem>
                <MenuItem isDisabled={userProfile.isLoggedIn ? false : true}>
                  Active Quizzes (unimplemented)
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => loginContext.logout()}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
