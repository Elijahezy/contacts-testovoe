import { createReducer } from "@reduxjs/toolkit"
import { State } from "../types/state"
import { AuthorizationStatus } from "../consts/consts"
import { fetchContacts, requireAuthorization } from "./action"

const initialState: State = {
    authorizationStatus: AuthorizationStatus.Unknown,
    contacts: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchContacts, (state, action) => {
            const contacts = action.payload;
            state.contacts = contacts;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
})

export {
    reducer
}