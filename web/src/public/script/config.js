/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const URL_BASE = document.baseURI.replace("//", "/").split("/")[1];
console.log(URL_BASE);
let URL = "http://localhost:8080";
if(URL_BASE !== "localhost:8082") {
  URL = "http://192.168.15.19:8080";
}

const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
});