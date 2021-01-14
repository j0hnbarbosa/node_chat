/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getTable = () => document.getElementById("table-root");

const generateTabe = (objValue, index, tagType) => {
  const { createdAt, updatedAt, ...obj } = objValue;
  const row  = document.createElement("tr");

  if(index !== "header") {
    obj.id = index;
  }

  Object.values(obj).forEach((value) => {
    const cell = document.createElement(tagType);
    const text = document.createTextNode(value || "-");
    cell.appendChild(text);
    row.appendChild(cell);
  });
  return row;
};

const buildTable = (data) => {
  const mock = new Array(5).fill(null).map((v, index) => ({
    username: `name${index}`, 
    email: `name${index}@email.com`, 
    password: `password${index}`
  }));

  console.log(data);
  const table = getTable();
  
  
  if(table) {
    if(table.childElementCount === 0) {
      const objHeader = {num: "N°", user: "Username", email: "Email", psw: "Password" };
      const rowHeader = generateTabe(objHeader, "header", "th");
      table.appendChild(rowHeader);
    }

    data.forEach((objValue, index) => {
      const row = generateTabe(objValue, index + 1, "td");
      table.appendChild(row);
    });
  }
};