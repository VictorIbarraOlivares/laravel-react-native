import React, { createContext, useReducer, useMemo, useContext, useEffect } from "react";
import * as axios from "axios";
import { getItemAsync } from "expo-secure-store";
import AuthReducer, { initialState, RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../reducers/AuthReducer";
import AppNavigation from "../navigations/AppNavigation";

export const USER_TOKEN_KEY = "userToken";
export const USER_KEY = "user";

export const AuthContext = createContext();

const AuthProvider = () => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
}