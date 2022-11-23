import { Roles } from "./roles"

export interface AuthInfo  {
    userRole: Roles | null
    token: string | null
    id: string
    logged: boolean
}
