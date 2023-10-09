"use client"
import React, { createContext, useContext, useState } from "react";
interface ContextValue {
    isDarkTheme: boolean;
    userStatus: boolean;
    userIdentity:string;
}

const initialValue: ContextValue = {
    isDarkTheme: false,
    userStatus: false,
    userIdentity:'',
}

export const context = createContext<{
    getters: ContextValue;
    setters: {
        setUserStatus: React.Dispatch<React.SetStateAction<boolean>>;
        setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
        setIdentity: React.Dispatch<React.SetStateAction<string>>;
    };
}>({
    getters: initialValue,
    setters: {
        setUserStatus: () => {},
        setDarkTheme: () => {},
        setIdentity:() => {}
    },
});

const ContextProvider = ({ children }: { children: React.ReactNode; }) => {
    const [userStatus, setUserStatus] = useState(initialValue.userStatus)
    const [isDarkTheme, setDarkTheme] = useState(initialValue.isDarkTheme)
    const [userIdentity, setIdentity] = useState(initialValue.userIdentity)
    const getters = {
        userStatus,
        isDarkTheme,
        userIdentity
    };
    const setters = {
        setUserStatus,
        setDarkTheme,
        setIdentity,
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