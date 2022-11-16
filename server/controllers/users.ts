const { User } = require("../models/users");
const bcrypt = require  ("bcrypt");
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getErrorMessage } from "../helpers/errorReport";

const hashPassword = async (password:string, saltRound:number) => {
    const salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(password, salt);
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, roleId } = req.body;
        const user = await User.findOne({
            where: { email: email },
            attributes: { exclude: ["password"] },
        });

        res.status(200).json({ user: user })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error('Send me your data :D')
        }
        const { userName, firstName, lastName, email, password, phoneNumber, userRole, profilePic } = req.body;
        const hashedPassword = await hashPassword(password, 10)
        const [user, created] = await User.findOrCreate({
            where: { email: email },
            defaults: {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: hashedPassword,
                phoneNumber: phoneNumber,
                userRole: userRole,
                profilePic: profilePic
            }
        })

        if (!created) {
            throw new Error(`E-mail ${req.body.email} already exists in database`)
        }
        await delete user.dataValues.password;
        res.status(200).json({ success: `User added with e-mail ${req.body.email}`, user: user.dataValues })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }

}

export const loginUser = (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error('Send me your data :D')
        }
        res.status(200).json({ success: `User added with e-mail ${req.body.email}` })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }

}

export const updateUSer = (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error('Send me your data :D')
        }
        res.status(200).json({ success: `User updated with e-mail ${req.body.email}` })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }

}

export const deleteUSer = (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error('Send me your data :D')
        }
        res.status(200).json({ success: `User deleted with e-mail ${req.body.email}` })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }


const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password }: any = req.body;


    const user = await User.findOne({
      where: { email },
    });

    if (!User || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({
        message: "User or password is not correct",
      });
    }

    user.password = "undefined"

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

}