import React from 'react';

import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Stack,
  Box,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  Select,
  Textarea,
  Checkbox,
} from '@chakra-ui/react';

export default function CreateQuizDrawer({ openDrawer, onCloseDrawer }) {
  const { isOpen, onClose } = useDisclosure({
    isOpen: openDrawer,
    onClose: onCloseDrawer,
  });
  const firstField = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Create a new quiz</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormControl
                  display="flex"
                  alignItems="center"
                  mt={2}
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor="quizName">Name</FormLabel>
                  <Checkbox>Public</Checkbox>
                </FormControl>

                <Input
                  ref={firstField}
                  id="quizName"
                  placeholder="Please enter a title for the quiz"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter the link to your presentation"
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Source Type</FormLabel>
                <Select id="owner" defaultValue="slides">
                  <option value="slides">Google Slides</option>
                  <option value="pdf">PDF</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  placeholder="(Optional) Enter a description for your quiz."
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
