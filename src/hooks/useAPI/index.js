import { useState } from 'react';

export function useAPI(apiFunction) {
  const [response, setResponse] = useState({
    data: null,
    inProgress: false,
    error: null,
    isSuccess: false
  });

  const apiCaller = () => {
    setResponse({
      data:null,
      inProgress: true,
      error: null,
      isSuccess: false
    });

    apiFunction()
      .then(res => {
        setResponse({
          ...response,
          data: res,
          inProgress: false,
          isSuccess: true
        })
      })
      .catch(err => {
        setResponse({
          ...response,
          inProgress: false,
          error: err.message
        })
      })
  };

  return [response, apiCaller];
}