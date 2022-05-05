const settings = require("./config.json");
const axios = require("axios");


exports.handler = (event) => {
let responseData = {};
axios
  .get(settings.apiUrl + "processGetAllEmails?token=" + settings.token)
  .then((response) => {
    // handle success
    console.log(response.data);
    console.log("status code: " + response.status);
    responseData = {data: response.data, code: response.status} ;
  })
  .catch((error) => {
    // handle error
    responseData = {error: error} ;
    console.log(error);
  });
    return responseData;
};
