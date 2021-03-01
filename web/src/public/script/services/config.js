/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const URL_BASE = document.baseURI.replace("//", "/").split("/")[1];
console.log(URL_BASE);
let URL_WEB = "http://localhost:8080";
if(URL_BASE !== "localhost:8082") {
  URL_WEB = "http://192.168.15.16:8080";
}

const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  "Authorization": `Bearer ${localStorage.getItem("token")}`,
  "Accept": "application/json",
});

const getFetch = async (url, headers) => {
  try {

    const res = await fetch(url, headers);
    
    if(res.status !== 200) {
      console.log("res);", res);

      localStorage.removeItem("token");

      if(window.location.pathname !== "/") {
        window.location.href = "/";
      }

      throw { message: res.statusText };
    }

    const data = await res.json();
  
    return {
      data,
      res,
    };
    
  } catch (err) {
    console.log(err);
    getErrorMessage(err);
  }

};