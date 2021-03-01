/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getInputs = (inputs) => {
  const values = {};
  let isInputFieldEmpty =  false;

  try {
    for(let i=0; i < inputs.currentTarget.length; i+=1) {
      if(inputs.currentTarget[i].name) {
        values[inputs.currentTarget[i].name] = inputs.currentTarget[i].value.trim();
        if(!values[inputs.currentTarget[i].name]) {
          isInputFieldEmpty = true;
          break;
        }
      } 
    }
  
    if (isInputFieldEmpty) {
      alert("ALL FIELDS MUST BE FILLED!");
      return null;
    }
  
    return values;
  } catch (error) {
    console.log(error);
    return null;
  }

};

const getErrorMessage = (err) => {
  console.log(err);
  const msg = err["message"] ? err["message"] : JSON.stringify(err); 
  const tagToInjectMessage = document.getElementById("msg-infra");
  tagToInjectMessage.innerHTML = msg;
};

const goBackIfTokenExist = () => {
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;

  if(token && (pathname === "/" || pathname === "/register.html")) {
    window.history.back();
  }
};

goBackIfTokenExist();