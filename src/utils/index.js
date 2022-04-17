export const getPresentationIDFromUrl = url => {
  const GOOGLE_SHARE_LINK_REGEX =
    /https:\/\/docs.google.com\/presentation\/d\/(.*)\//;
  var pID = GOOGLE_SHARE_LINK_REGEX.exec(url);
  if (pID) {
    return pID.length === 2 ? pID[1] : '';
  }
  return '';
};

export function makeAPICall(id = '') {
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
