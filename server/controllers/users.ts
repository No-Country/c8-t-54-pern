const { User } = require("../models/users");
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password }: any = req.body;

    const user: { password: String; id: String, dataValues: {} } = await User.findOne({
      where: { email },
    });

    if (!User || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({
        message: "User or password is not correct",
      });
    }

    user.password = undefined

    // console.log(user.dataValues)

    const token = jwt.sign({ user: user.dataValues }, "secret", { expiresIn: "2h" });

    return res.status(201).json({
      message: "User access successfully",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
