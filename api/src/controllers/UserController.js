import Users from "../models/user";

const UserController = {
  findAll: async (req, res) => {
    const { id } = req.body;
    if(id) {
      const user = await Users.findOne({ where: { id },   order: [["createdAt", "DESC"]] });
      if(!user) {
        return res.sendStatus(404);
      }
      return res.status(200).send(user);
    }

    const users = await Users.findAll({  order: [["createdAt", "DESC"]] });
    return res.status(200).send(users);
  },

  create: async (req, res) => {
    console.log("Request URL:", req.originalUrl);
    const { username, email, password } = req.body;

    console.log("BODY:", req.body);

    const user = await Users.create({ username, email, password });
    return res.status(200).send(user);
  },

  delete: async (req, res) => {
    const { id } = req.body;
    const user = await Users.findOne({ where: { id } });
    console.log(user);
    if(!user) {
      return res.status(404).send("User not Found.");
    }

    await user.destroy();

    return res.sendStatus(200);
  },

  update: async (req, res) => {
    const { id, username, email, password } = req.body;

    if(id) {
      const user = await Users.findOne({ where: { id }});
      if(!user) {
        return res.status(404).send(`User not found with ID: ${id}`);
      }

      console.log(req.body);
      const repo = await user.update({ username, email, password });
      return res.status(200).send(repo);
    }


    return res.status(500).send("ID is missing in the request");
  },
};

export default UserController;