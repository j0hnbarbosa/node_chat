/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const onLogin = async (e) => {
  e.preventDefault();

  const values = getInputs(e);

  console.log("Inside loging script file!", values);


  if (values) {
    const formBody = new URLSearchParams({
      "email": values["email"].trim(),
      "password": values["password"].trim(),
    });

    const { data, res } = await getFetch("/", { "method": "POST", headers, "body": formBody });
      
    if (res.status !== 200) {
      return null;
    }

    // If the status is OK it will return the token. 
    console.log("TOKEN: ", data);

    localStorage.setItem("token", data.token);

    window.location.href = "users.html";
  }
};
