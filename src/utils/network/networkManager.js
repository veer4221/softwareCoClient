import axios from "axios";
import https from "https";
var httpsAgent = require('https-agent');
// const https = require("https");

axios.interceptors.request.use(
  function (config) {
    config.metadata = { startTime: new Date() };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    response.config.metadata.endTime = new Date();
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
  },
  function (error) {
    error.config.metadata.endTime = new Date();
    error.duration =
      error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
  }
);

export const callAPI = (
  apiURL,
  params = {},
  type,
  data = {},
  extraParams = { fileName: "file", fileExtension: ".csv" },
  headerType = "Bearer",
  contentType = "application/x-www-form-urlencoded"
) => {
  alert("in network")
  console.log("network", apiURL,
    params,
    type,
    data)
  // console.log("interseptor", authToken, apiURL, params);
  return new Promise(async function (resolve, reject) {
    var baseURL = "http://localhost:5000/admin/api/v1";

    // var baseURL = getBaseUrl();
    let options = {};
    // At request level
    var agent;
    try {
      agent = httpsAgent({
        rejectUnauthorized: false,
        keepAlive: true,
      });
    } catch (error) {
      console.log("error", error)
    }
    try {
      options = {
        method: type,
        baseURL: baseURL,
        url: apiURL,
        //headers: headers,
        params: params,
        data: data,
        timeout: 500000,
        rejectUnauthorized: false,
        httpsAgent: agent,
      };
      let currentToken = localStorage.getItem("token");
      if (currentToken && currentToken.length > 0) {
        let token = headerType + " " + currentToken;

        const auth = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,

          "Access-Control-Allow-Origin": "*",
        };
        options["headers"] = auth;
      }

      let response = await axios(options);
      console.log("inNT", response);
      // console.log("inNssT", response?.headers?.["content-type"] );
      // if (response?.headers?.["content-type"] != "application/json") {
      //   try {
      //     const url = window.URL.createObjectURL(new Blob([response.data]));
      //     const link = document.createElement("a");
      //     link.href = url;
      //     link.setAttribute(
      //       "download",
      //       `${extraParams.fileName}_${Math.floor(Date.now() / 1000)}${extraParams.fileExtension
      //       }`
      //     ); //or any other extension
      //     document.body.appendChild(link);
      //     link.click();
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
      if (response) {
        return resolve(response);
      } else {
        return resolve({});
        //return reject(Error("API Server Not responding"));
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status &&
        (error.response.status === 401 || error.response.status === 402)
      ) {
      }
      resolve(error.response);
      //return reject(Error("API Server Not responding " + error));
    }
  });
};

/*  
//API call  

import {callAPI} from "../../../utils/Interceptor/axios"

var apiURL ="admin/api/v1/HeadOffice/getHierarchy?id=1"
console.log("API Call ", new Date(), apiURL);
 callAPI('', apiURL, {}, 'GET', {}).then(function (body) {
  if (body && body.data) {
    console.log('API Call come in body ... ', body.data)
  } else {
    console.log('API Call come else  body ... ', body)
  }
})
  .catch(error => {
    console.log(' API Call come execption ... ', error)
  });

  */
