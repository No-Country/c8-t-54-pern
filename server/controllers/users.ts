import { Response, Request } from "express";
import { getErrorMessage, reportError } from "../helpers/errorReport";
import db from "../models"

export const getUser = async(req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, roleId } = req.body;
        const user = await db.User.findOne({
            where: {email: email},
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        });
        
        res.status(200).json({ user: JSON.stringify(user) })
    } catch (error) {
        res.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, roleId } = req.body;
        await db.User.findOrCreate(
            { email: email },
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                roleId: roleId,
            }
        )
        if (!req.body.email || !req.body.password) {
            throw new Error('Send me your data :D')
        }
        res.status(200).json({ success: `User added with e-mail ${req.body.email}` })
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

}