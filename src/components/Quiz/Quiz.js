import { Heading } from '@chakra-ui/react';
import React from 'react';
import './Quiz.css';

export const Quiz = () => {
  return (
    <>
      <Heading>Quiz Title</Heading>
      <div className="disabled">
        <iframe
          title="frame"
          id="slideshow"
          src="https://docs.google.com/presentation/d/1VocS0qC9zVh6kte33J5aUvcEVhBySkeB1eOsnyJVjyY/embed?start=false&loop=false&delayms=60000&rm=minimal"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </>
  );
};

export default Quiz;
