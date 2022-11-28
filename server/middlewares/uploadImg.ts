import { NextFunction, Request, Response } from 'express'
import * as fs from "fs";
import multer, { MulterError } from 'multer'
import path from 'path'
const { v4: uuid } = require("uuid");
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { reportError, getErrorMessage } from '../helpers/errorReport';

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.ST_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID,
    appId: process.env.APP_ID
};

const appFire = initializeApp(firebaseConfig);
const storageFire = getStorage(appFire);
const profilePicsRef = ref(storageFire, 'images/profilepics');
const productPicsRef = ref(storageFire, 'images/productpics');

export const uploadFire = async (req: Request, file: Response, next: NextFunction) => {
    try {
        //console.log("file.req.files", file.req.files)
        //(file.req.files as Array<Express.Multer.File>).map(file => console.log(file.path))
        const filenames = file.req.files as Array<Express.Multer.File>
        // console.log(typeof(filenames)); 
        // console.log(filenames); 
        //onst file_names = filenames.map(file =>file.path)
        // console.log(Object.entries(filenames))
        // console.log(Object.keys(filenames))
        let values = Object.values(filenames)
console.log(values.length);

        // console.log(Object.keys(values))
        // console.log(Object.entries(values))
        //console.log(Object.values(Object.values(values[0])))
        let data = Object.values(values)
        console.log(data.length);
        console.log(Object.keys(data))
        console.log(Object.entries(data))
        console.log(Object.values(data[0])[6])

        const metadata = {
            contentType: file.req.file?.mimetype
        };
        if (file.req.file?.filename == undefined) {
            throw new Error("No file selected")
        }
        const fileName = file.req.file?.filename;
        const localImgPath = file.req.file?.path || "../public/uploads/file.txt"
        const spaceRef = ref(profilePicsRef, fileName);
        const fileStream = fs.readFileSync(path.join(__dirname, '../public/uploads/' + fileName));

        const uploadTask = uploadBytesResumable(spaceRef, fileStream, metadata);

        uploadTask.on(
            'state_changed',
            (snapshot: { bytesTransferred: number; totalBytes: number; state: any; }) => {
                console.log("Uploading data");
            },
            (error: any) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
                    req.body.profilePic = downloadURL || "asdasda";
                    fs.unlink(localImgPath, (err) => {
                        if (err) throw err;
                        console.log('deleted: ', localImgPath);
                    });
                    next()
                });
            }
        )
    } catch (error) {
        file.status(400).json(reportError({ message: getErrorMessage(error) }))
    }
};

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: DestinationCallback) {
        callback(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req: Request, file: Express.Multer.File, callback: FileNameCallback) {
        const destFilename = uuid() + path.extname(file.originalname);
        callback(null, destFilename,);
    }
});

export const uploadLocalSingle = multer({
    storage,
    fileFilter: (_req, file, cb) => {
        if (
            file.mimetype == "image/png"
            || file.mimetype == "image/jpg"
            || file.mimetype == "image/jpeg"
            || file.mimetype == "image/svg+xml"
            || file.mimetype == "image/webp"
        ) {
            cb(null, true);
            console.log("log", file);
        } else {
            cb(null, false);
            console.log("log", file);
            
            //cb(new Error('Only .png, .svg, .webp, .jpg and .jpeg format allowed!'));
        }
    }
})//.single("profilePic");
.fields(
    [
        { name: 'profilePic', maxCount: 1 },
        { name: 'productPic', maxCount: 8 }
    ]
)
export const checkMultipart = async (req: Request, file: Response, next: NextFunction) => {
    //console.log("file.req ", req.headers);
    if (file.req.headers["content-type"] !== 'application/x-www-form-urlencoded') {
        await uploadLocalSingle(req, file, function (err) {
            if (err) {
                console.log(err);
                
                return file.status(400).json(reportError({ message: getErrorMessage(err) }))
            }
            next()
        })
    }
    if (file.req.headers["content-type"] === 'application/x-www-form-urlencoded') {
        next()
    }
}

export const handleUploadFirebase = (req: Request, file: Response, next: NextFunction) => {
    if (file.req.headers["content-type"] !== 'application/x-www-form-urlencoded') {
        uploadFire(req, file, next)
    }
    if (file.req.headers["content-type"] === 'application/x-www-form-urlencoded') {
        next()
    }
}
