import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react'
import './Quiz.css';

const SLIDES_BASE_URL = "https://docs.google.com/presentation/d/"
const SLIDES_URL_PARAMS = "/embed?start=false&loop=false&delayms=60000&rm=minimal"

const QuizContainer = ({pID, slideID=""}) => {
  return (
    <Box className="quizContainer" pos="relative">
      <Box pos="absolute" top="0" right="0">
        <Popover placement='left-start' isLazy>
          <PopoverTrigger>
            <Button>Scoreboard</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <QuizFrame pID={pID} slideID={slideID}/>
    </Box>
  )
}

const QuizFrame = (({pID, slideID=""}) => {
  const [url, setUrl] = useState(()=>SLIDES_BASE_URL+pID+SLIDES_URL_PARAMS);

  useEffect(()=>{ // FIX UP LOGIC HERE TO UPDATE SLIDE IDs
    setUrl(prevUrl => prevUrl.concat(slideID))
  }, [slideID])
  return(
    <div className="disabled">
      <iframe
        title="frame"
        id="slideshow"
        src={url}
        frameBorder="0"
        allowFullScreen={true}
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  )
});



export default QuizContainer;