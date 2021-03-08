/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getUsers = async () => {
  getTable().innerHTML = "";

  const { data } = await getFetch("/users", {"method": "GET", headers});
  buildTable(data);

};

getUsers();