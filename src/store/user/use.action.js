import { USER_ACTION_TYPES } from "./user.types";

export function setCurrentUser(user) {
   return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
}