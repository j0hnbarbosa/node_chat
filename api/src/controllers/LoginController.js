import Users from "../models/user";
import { generateAccessToken } from "../services/auth";

const LoginController = {
  findOne: async (req, res) => {
    const { email, password } = req.body;
    if(email && password) {
      const emailLowerCase = email.toLowerCase();

      const user = await Users.findOne({ where: { email: emailLowerCase, password } });

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
    try{
      console.log("Request URL:", req.originalUrl);
      const { username, email, password } = req.body;
      const emailLowerCase = email.toLowerCase();

      console.log("BODY:", req.body);

      const user = await Users.create({ username, email: emailLowerCase, password });
      const token = generateAccessToken(email, password);

      return res.status(200).send({ ...user, token });
    } catch(err) {
      console.log(err);
      return res.status(500).send({ message: "E-mail already registered!" });
    }
  },
};

export default LoginController;