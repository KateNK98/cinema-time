import { useState } from "react";

export default function usePersistedSate(key, initialState) {
    const [state, setSate] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return typeof initialState === 'function' 
            ? initialState() 
            : initialState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });

    const updateState = (value) => {
        const newState = typeof value === 'function'
            ? value(state)
            : value;

        if (newState === null || newState === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newState));
        }

        setSate(newState);
    }

    return [state, updateState];
}