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
    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await getItemAsync(USER_TOKEN_KEY);
            } catch (e) {
                alert("El token no se ha podido restaurar, cierra la APP");
            }

            dispatch({ type: RESTORE_TOKEN, token: userToken });
        }

        bootstrapAsync().then(() => {});
    });

    const handleLogin = async ({ token, user }) => {
        try {
            dispatch({ type: SIGN_IN, token, user});
        } catch (error) {
            // TODO crear un toast para informar al usuario que algo esta mal
            throw new Error(error);
        }
    }

    const handleLogout = async () => {
        try {
            delete axios.default.headers.common["Authorization"];
        } catch (error) {
            // TODO crear un toast para informar al usuario que algo esta mal
            throw new Error(error);
        } finally {
            dispatch({ type: SIGN_OUT});
        }
    }

    const authContext = useMemo( () => {
        return {
            state, handleLogin, handleLogout
        }
    }, [state]);

    return (
        <AuthContext.Provider value={authContext}>
            <AppNavigation userToken={state.userToken} />
        </AuthContext.Provider>
    );
}
/**
 * Object {
 *  "handleLogin": [Function handleLogin],
 *  "handleLogout": [Function handleLogout],
 *  "state": Object {
 *      "user": null,
 *      "userTolen": null,
 *  }.
 * }
 */
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };