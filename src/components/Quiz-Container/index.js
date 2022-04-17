import React, { useState, useEffect } from 'react';
import './Quiz.css';

const SLIDES_BASE_URL = "https://docs.google.com/presentation/d/"
const SLIDES_URL_PARAMS = "/embed?start=false&loop=false&delayms=60000&rm=minimal"

const QuizContainer = (({pID, slideID=""}) => {
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
        frameborder="0"
        width="960"
        height="569"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  )
});

export default QuizContainer;