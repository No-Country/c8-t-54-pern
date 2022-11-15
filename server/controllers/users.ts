import { Response, Request } from "express";
import { getErrorMessage, reportError } from "../helpers/errorReport";

export const getUser = (req: Request, res: Response) => {
    res.send('getUser')
}

export const createUser = (req: Request, res: Response) => {
    try {
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