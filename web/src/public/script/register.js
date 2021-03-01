/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


const onSubmit = async (e) => {
  e.preventDefault();

  const values = getInputs(e);

  if(values) {
    const formBody = new URLSearchParams({
      "username": values["name"].trim(),
      "email": values["email"].trim(),
      "password": values["password"].trim(),
    });

    const url = `${URL_WEB}/register`;

    const { data } = await getFetch(url, { "method": "POST", headers, "body": formBody });

    // If the status is OK it will return the token. 
    console.log("TOKEN: ", data);

    localStorage.setItem("token", data.token);

    alert("Your data has been recorded in the database!");
    console.log(window);
    window.location.href = `${URL_WEB.replace(/8080/, "8082")}/users.html`;

  }
};