import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
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
import { getPresentationIDFromUrl, makeSlidesAPICall, saveQuizToDB } from '../../utils';
import { useQuizContext } from '../../contexts/QuizContext';
import { useUserContext } from '../../contexts/UserContext';
import { useAPI } from '../../hooks/useAPI';

export default function CreateQuizDrawer({ openDrawer, onCloseDrawer }) {
  const { isOpen, onClose } = useDisclosure({
    isOpen: openDrawer,
    onClose: onCloseDrawer,
  });
  const firstField = React.useRef();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const navigate = useNavigate();
  const quizContext = useQuizContext();
  const userProfile = useUserContext();
  const [ saveQuizResult, saveQuiz ] = useAPI(() =>saveQuizToDB(quizContext.quizState))

  useEffect(() => {
    quizContext.clearActiveQuiz();
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = () => {
    //const url = "https://docs.google.com/presentation/d/1NoJ7lyNxx5JlOwL_ZGHx_AteqgrsrFv2dcQskWWXT-0/edit?usp=sharing"; // Test Presentation link
    quizContext.clearActiveQuiz();
    setSubmitForm(true);
  };

  useEffect(() => {
    if (submitForm) {
      setIsLoading(true);
      const pID = getPresentationIDFromUrl(formData.url);

      const getSlideData = async () => {

        try {
          let res = await makeSlidesAPICall(pID);
          console.log('API response : ', res);

          let result = quizContext.createQuiz({
            quizID: nanoid(8),
            quizName: formData.quizName,
            quizURL: formData.url,
            creator: userProfile.userid,
            new_user:{
              [userProfile.userid]: userProfile.username
            }
          });
          console.log(result)
        }
        catch(err) {
          console.error(err)
        }
      };
      getSlideData();
      setSubmitForm(false);
    }
  }, [submitForm, formData, userProfile, quizContext]);

  useEffect(() => {
    //console.log(Object.keys(formData))
    if(isLoading && Object.keys(formData).length && quizContext.quizState.quizID !== '') {
       console.log("Useeffect in create quiz drawer")
      // console.log(quizContext)
      saveQuiz();
      // console.log(saveQuizResult)
    }
  }, [quizContext, formData]);
  
  useEffect(() => {
    console.log("UEF SaveQuizResult :: ",saveQuizResult)
    if(isOpen && saveQuizResult.isSuccess) {
      setIsLoading(false)
      navigate(`/quiz/${quizContext.quizState.quizID}`)
    }
  }, [saveQuizResult, navigate, quizContext.quizState.quizID]);

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
                  name="quizName"
                  value={formData.quizName || ''}
                  placeholder="Please enter a title for the quiz"
                  onChange={handleChange}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <Input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url || ''}
                    placeholder="Please enter the link to your presentation"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="source">Select Source Type</FormLabel>
                <Select
                  id="source"
                  name="source"
                  value={formData.source || 'slides'}
                  onChange={handleChange}
                >
                  <option value="slides">Google Slides</option>
                  <option value="pdf">PDF</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  name="description"
                  value={formData.description || ''}
                  placeholder="(Optional) Enter a description for your quiz."
                  onChange={handleChange}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>{isLoading ? 'Loading...' : 'Submit'}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
