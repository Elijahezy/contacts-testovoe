import { createAction } from "@reduxjs/toolkit"
import { ActionTypes } from "../types/action"
import { Contact } from "../types/state"
import { AuthorizationStatus } from "../consts/consts"

const fetchContacts = createAction(
    ActionTypes.FetchContacts,
    (contacts: Contact[]) => ({
        payload: contacts
    })
)

const requireAuthorization = createAction(
    ActionTypes.RequireAuthorization,
    (authStatus: AuthorizationStatus) => ({
        payload: authStatus,
    }),
);

const redirectToRoute = createAction(
    ActionTypes.RedirectToRoute,
    (url: string) => ({
        payload: url,
    }),
);

const createContact = createAction(
    ActionTypes.CreateContact,
    (contact: Contact) => ({
        payload: contact,
    })
)

const updateContact = createAction(
    ActionTypes.CreateContact,
    (contact: Contact) => ({
        payload: contact,
    })
)

export {
    fetchContacts,
    requireAuthorization,
    redirectToRoute,
    createContact,
    updateContact
}
