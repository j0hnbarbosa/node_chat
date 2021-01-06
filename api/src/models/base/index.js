import DataTypes from "sequelize";

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
};


export {
  id,
};