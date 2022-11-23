import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
const { v4: uuid } = require("uuid");

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: DestinationCallback) {
        callback(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req: Request, file: Express.Multer.File, callback: FileNameCallback) {
        const destFilename = uuid() + path.extname(file.originalname);
        callback(null, destFilename,);
    }
});

export const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/uploads'),
}).single("profilePic");

export const checkMultipart = async (req: Request, file: Response, next: NextFunction) => {
    console.log("file.req.headers ", file.req.headers);
    if (file.req.headers["content-type"] !== 'application/x-www-form-urlencoded') {
        await upload(req, file, next)
    }
    if (file.req.headers["content-type"] === 'application/x-www-form-urlencoded') {
        next()
    }
}
