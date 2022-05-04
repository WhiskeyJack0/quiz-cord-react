import axios from 'axios'


export const getPresentationIDFromUrl = url => {
  const GOOGLE_SHARE_LINK_REGEX =
    /https:\/\/docs.google.com\/presentation\/d\/(.*)\//;
  var pID = GOOGLE_SHARE_LINK_REGEX.exec(url);
  if (pID) {
    return pID.length === 2 ? pID[1] : '';
  }
  return '';
};

//Slides API call
// POST request with a presentationID
export const getSlideIDs = async (pID) => {
  try {
    console.log(pID)
    var data = JSON.stringify({
      presentationID: pID,
    });
    var config = {
      method: 'post', 
      url: '/getslides',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const response = await axios(config)
    console.log(response)
    return await(response.data)
  }
  catch(err) {
    console.log(`Error in getslides API call: ${err.response.data.message}`);
    throw err;
  }
}

//GET quiz details from DB
export const getQuizFromDB = async (id) => {
  console.log(id);
  try {
    var config = {
      method: 'get', 
      url: `/quiz/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(config)
    console.log("GetQuizFromDB resp : ", await response)
    return await response.data;
  }
  catch(err) {
    console.log("Error in getting Quiz details : ", err);
    throw err;
  }
}

//POST quiz context to DB
export const saveQuizToDB = async (quiz) => {
  console.log("Saving quiz to DB : ",quiz)
  try {
    var data = JSON.stringify({
      quizID: quiz.quizID,
      quizName: quiz.quizName,
      quizURL: quiz.quizURL,
      creator: quiz.creator,
      active_users:quiz.active_users
    });
    var config = {
      method: 'post', 
      url: `/quiz/${quiz.quizID}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const response = await axios(config)
    console.log("Save Quiz resp : ", response)
    return await(response.data)
  }
  catch(err) {
    console.log(`Error in saveQuizToDB call: ${err.response.data.message}`);
    throw err;
  }
}

//Login User 
export const authenticateUser = async (displayname, id) =>{
  console.log("Logging in user : ",displayname)
  try {
    var data = JSON.stringify({
      username: displayname,
      userid: id
    });
    var config = {
      method: 'post', 
      url: `/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const response = await axios(config)
    console.log("Login User resp : ", response)
    return await(response.data)
  }
  catch(err) {
    console.log(`Error in LoginUser call: ${err.response.data.message}`);
    throw err;
  }
}

export function makeSlidesAPICall(id = '') {
  var axios = require('axios');
  var data = JSON.stringify({
    presentationID: id,
  });
  var config = {
    method: 'post',
    url: '/getslides',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
}
