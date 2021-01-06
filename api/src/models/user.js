"use strict";

import {
  Model,
  DataTypes,
} from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize,
      modelName: "user",
    });
  }

}

export default User;
