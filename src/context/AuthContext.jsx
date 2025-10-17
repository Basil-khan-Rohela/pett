import React from "react";
import { createContext } from "react";
import { useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    return(
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};