/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getUsers = async () => {
  try {
    getTable().innerHTML = "";

    const res = await fetch(URL, {"method": "GET"});
    const data = await res.json();
    buildTable(data);

  } catch(err) {
    document.write(err);
    console.log(err);
  }
};

getUsers();