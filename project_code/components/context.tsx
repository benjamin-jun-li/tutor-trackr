"use client"
import React, { createContext, useContext, useState } from "react";
interface ContextValue {
    isDarkTheme: boolean;
    userStatus: boolean;
}

const initialValue: ContextValue = {
    isDarkTheme: false,
    userStatus: false,
}

export const context = createContext<{
    getters: ContextValue;
    setters: {
        setUserStatus: React.Dispatch<React.SetStateAction<boolean>>;
        setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
    };
}>({
    getters: initialValue,
    setters: {
        setUserStatus: () => {},
        setDarkTheme: () => {},
    },
});

const ContextProvider = ({ children }: { children: React.ReactNode; }) => {
    const [userStatus, setUserStatus] = useState(initialValue.userStatus)
    const [isDarkTheme, setDarkTheme] = useState(initialValue.isDarkTheme)
    const getters = {
        userStatus,
        isDarkTheme,
    };
    const setters = {
        setUserStatus,
        setDarkTheme
    };
    return (
        <context.Provider value={{ getters, setters }}>
            {children}
        </context.Provider>
    )
}

export const useContextValue = () => {
    return useContext(context);
};

export default ContextProvider