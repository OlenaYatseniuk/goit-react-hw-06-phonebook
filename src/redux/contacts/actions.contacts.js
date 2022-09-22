import { createAction } from "@reduxjs/toolkit";
import { DELETE_CONTACT, ADD_NEW_CONTACT } from "./types.contacts";

export const addNewContactAction = createAction(ADD_NEW_CONTACT);
export const deleteContactsAction = createAction(DELETE_CONTACT);
