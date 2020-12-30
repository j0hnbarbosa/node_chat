import DataType from "sequelize";
import base from "./base";

const  User = base("user", {
  username: DataType.STRING,
  birthday: DataType.DATE
});

const test = async () => {
  await User.sync().then(function() {
    return User.destroy({  truncate: true });
  }).then(function(jane) {
    console.log(jane);
  });
};

test();
// export default User;
