/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getUsers = async () => {
  getTable().innerHTML = "";

  const url = `${URL_WEB}/users`;
  const { data } = await getFetch(url, {"method": "GET", headers});
  buildTable(data);

};

getUsers();