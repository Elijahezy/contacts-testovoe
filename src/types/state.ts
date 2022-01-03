import { AuthorizationStatus } from "../consts/consts"

type User = {
    id: number,
    login: string,
    password: string,
}

type Contact = {
    id: number,
    name: string,
    phone: string,
    email: string,
}

type State = {
    authorizationStatus: AuthorizationStatus,
    contacts: Contact[],
}

export type {
    State,
    User,
    Contact
}