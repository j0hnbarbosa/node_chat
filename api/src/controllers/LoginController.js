import Users from "../models/user";
import { generateAccessToken } from "../services/auth";

const LoginController = {
  findOne: async (req, res) => {
    const { email, password } = req.body;
    if(email && password) {
      const user = await Users.findOne({ where: { email, password } });
      if(!user) {
        return res.status(404).send({ message: "User not found!"});
      }

      // Generate a token to send to the client
      const token = generateAccessToken(email, password);
      return res.status(200).send({ token });
    }

    return res.status(401).send({ message: "Wrong Email or Password!"});
  },

  create: async (req, res) => {
    console.log("Request URL:", req.originalUrl);
    const { username, email, password } = req.body;

    console.log("BODY:", req.body);

    const user = await Users.create({ username, email, password });
    const token = generateAccessToken(email, password);

    return res.status(200).send({ ...user, token });
  },
};

export default LoginController;