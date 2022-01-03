import { ApiRoute, AppRoute, AuthorizationStatus } from "../consts/consts";
import { dropToken, getToken, saveToken } from "../services/token";
import { ThunkActionResult } from "../types/action";
import { AuthData } from "../types/types";
import { fetchContacts, redirectToRoute, requireAuthorization } from "./action";
import { User } from '../types/state';
import { Contact } from "../types/state";
import { Dispatch, SetStateAction } from "react";


const loginAction = ({ login, password }: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const users = await api.get(ApiRoute.Users)

        if (users.data.find((user: User) => user.login === login && user.password === password)) {
            dispatch(requireAuthorization(AuthorizationStatus.Auth))
            saveToken(login)
            dispatch(redirectToRoute(AppRoute.Main));
        }

    };

const logoutAction = (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        dropToken()
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
        dispatch(redirectToRoute(AppRoute.Login));
    }

const checkAuthorizationStatus = (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const token = getToken()
        const users = await api.get(ApiRoute.Users)
        if (users.data.find((user: User) => user.login === token)) {
            dispatch(requireAuthorization(AuthorizationStatus.Auth))
            dispatch(redirectToRoute(AppRoute.Main));
        }
    }

const registrateAction = ({ id, login, password }: User, setRegistrationStatus: Dispatch<SetStateAction<boolean>>): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        await api.post(ApiRoute.Users, { id, login, password })
            .then((response) => response.status === 201 ? setRegistrationStatus(true) : setRegistrationStatus(false))
    }

const fetchContactsAction = (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const contacts = await api.get(ApiRoute.Contacts)
        dispatch(fetchContacts(contacts.data))
    }

const postContact = ({ name, phone, email }: Contact): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        await api.post(ApiRoute.Contacts, { name, phone, email });
    }

const updateContact = ({ id, name, phone, email }: Contact): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        await api.put(`${ApiRoute.Contacts}/${id}`, { name, phone, email })
    }

const deleteContact = ({ id }: Contact): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        await api.delete(`${ApiRoute.Contacts}/${id}`)
    }

export {
    loginAction,
    fetchContactsAction,
    postContact,
    updateContact,
    deleteContact,
    registrateAction,
    checkAuthorizationStatus,
    logoutAction
}