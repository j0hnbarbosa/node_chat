import database from "../../config/database";
import DataType from "sequelize";

const base = (entity=null, fields=null) => {
  if(!entity && !fields) {
    console.log("Iside if");
    return database;
  }

  const id = {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  };

  return database.define(entity, {id, ...fields});
};

export default base;