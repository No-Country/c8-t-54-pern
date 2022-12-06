import mercadopago from 'mercadopago' ;
import { getErrorMessage, reportError } from "../helpers/errorReport";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { UserDataInterface } from '../interfaces/user.interface';

const clientSecret = process.env.CLIENT_SECRET;
const clientId= process.env.CLIENT_ID;

const server = process.env.SERVER /*?¡?¡*/ || 'http://localhost:3000' || "https://c854pernfront-5m8om.ondigitalocean.app";
const success = `${server}/checkout/success`;
const failure = `${server}/checkout/failure`;
const pending = `${server}/checkout/pending`;

export const mp = async (items: Array<Object>, user: UserDataInterface) => {
    try{

        if(clientSecret && clientId){
            mercadopago.configure({
                client_id: clientId,
                client_secret: clientSecret,
            });
        }

        const preferenceConfig: CreatePreferencePayload = {
            items: items,
            back_urls: {success,failure,pending},
            payer: {
                name: user.firstName,
                surname: user.lastName,
                email: user.email,
            }
        }

    const preference = mercadopago.preferences.create(preferenceConfig)
    
    return preference

    } catch (error) {
         console.log(reportError({ message: getErrorMessage(error) }))
    }
}
