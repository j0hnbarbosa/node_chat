/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


const onSubmit = async (e) => {
  e.preventDefault();

  let nextValue = 0;
  const formBody = new URLSearchParams({
    "username": e.currentTarget[nextValue++].value,
    "email": e.currentTarget[nextValue++].value,
    "password": e.currentTarget[nextValue++].value,
  });
  

  try{
    const res = await fetch(URL, { "method": "POST", headers, "body": formBody });
    const data = await res.json();
    console.log("DATA: ", data); 
    alert("Your data has been recorded in the database!");
    console.log(window);
    window.location.href = `${URL.replace(/8080/, "8082")}/users.html`;
  } catch(err) {
    alert(err);
    console.log(err);    
  }

  console.log("HERER");
};