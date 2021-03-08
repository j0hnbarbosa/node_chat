/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const URL_BASE = document.baseURI.replace("//", "/").split("/")[1];
console.log(URL_BASE);
let URL_WEB = "http://localhost:8080";
if(URL_BASE !== "localhost:8082") {
  URL_WEB = "http://192.168.15.18:8080";
}

const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  "Authorization": `Bearer ${localStorage.getItem("token")}`,
  "Accept": "application/json",
});


const getFetch = async (url = "", headers) => {
  try {
    const url_endpoint = `${URL_WEB}/${url.replace("/", "")}`;

    const res = await fetch(url_endpoint, headers);
    
    if(res.status !== 200) {
      console.log("res);", res);

      localStorage.removeItem("token");
      const path = window.location.pathname;
      if(path !== "/" && path !== "/register.html") {
        debugger
        window.location.href = "/";
      }

      const errorMsg = (await res.json()).message || res.statusText;

      throw { message: errorMsg };
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