import { Roles } from "./roles"

export interface UserInfo  {
    userRole: Roles | null
    token: string | null
    id: string
    logged: boolean
    firstName?: string
    lastName?: string
    userName?: string
    email?: string
    phoneNumber?: number | null
    profilePic?: string
}
