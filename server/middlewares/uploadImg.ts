import { NextFunction, Request, Response } from 'express'
import * as fs from "fs";
import multer, { MulterError } from 'multer'
import path from 'path'
const { v4: uuid } = require("uuid");
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"

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

    const fileName = req.body.destFilename;
    const spaceRef = ref(profilePicsRef, fileName);
    const fileStream = fs.readFileSync(path.join(__dirname, '../public/uploads/'+fileName));
    
    // uploadBytes(spaceRef, fileStream)
    //     .then((snapshot) => {
    //         console.log('Uploaded a blob or file!', snapshot);
    //         req.body.destFilename = getDownloadURL(snapshot.ref)
    //         // .then((downloadURL) => {
    //         //     //console.log('File available at', downloadURL);
    //         //     req.body.destFilename = downloadURL;
    //         //     console.log('UPload req.body', req.body);
    //         // });
    //     }).then(
    //         next
    //     ).catch(error => console.log(error))
    const uploadTask = uploadBytesResumable(spaceRef, fileStream);
    uploadTask.on(
        'state_changed',
        (snapshot: { bytesTransferred: number; totalBytes: number; state: any; }) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error: any) => {
            console.log(error);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                req.body.destFilename = downloadURL;
                console.log('File available at', downloadURL);
            });
        }
    )
};


const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: DestinationCallback) {
        callback(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req: Request, file: Express.Multer.File, callback: FileNameCallback) {
        const destFilename = uuid() + path.extname(file.originalname);
        req.body.destFilename = destFilename;
        callback(null, destFilename,);
    }
});

export const upload = multer({
        storage,
        dest: path.join(__dirname, '../public/uploads'),
    }).single("profilePic");

export const checkMultipart = async (req: Request, file: Response, next: NextFunction) => {
    //console.log("file.req.headers ", file.req.headers);
    if (file.req.headers["content-type"] !== 'application/x-www-form-urlencoded') {
        await upload(req, file, next)
        //uploadFire(req, file, next)
    }
    if (file.req.headers["content-type"] === 'application/x-www-form-urlencoded') {
        next()
    }
}

export const esperaMierda = async (req: Request, file: Response, next: NextFunction) => {
    if (file.req.headers["content-type"] !== 'application/x-www-form-urlencoded') {
        await uploadFire(req, file, next)        
    }
    if (file.req.headers["content-type"] === 'application/x-www-form-urlencoded') {
        next()
    }
    next()
}
