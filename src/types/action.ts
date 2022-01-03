import { createContact, fetchContacts, redirectToRoute, requireAuthorization } from "../store/action";
import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';
import {
    AxiosInstance
} from 'axios';
import { State } from '../types/state';

enum ActionTypes {
    FetchContacts = 'contacts/fetchContacts',
    RequireAuthorization = 'user/requireAuthorization',
    RedirectToRoute = 'app/redirectToRoute',
    CreateContact = 'contacts/createContact'
}

type Actions =
    | ReturnType<typeof fetchContacts>
    | ReturnType<typeof requireAuthorization>
    | ReturnType<typeof redirectToRoute>
    | ReturnType<typeof createContact>



type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
    ThunkAppDispatch,
    ThunkActionResult
}

export {
    ActionTypes,
}