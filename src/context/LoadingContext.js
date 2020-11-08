import React, { createContext, useState } from "react";

export const LoadingContext = createContext({
    isLoading: Boolean,
    setIsLoading: Function,
});

const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const loading = { isLoading, setIsLoading };

    return (
        <LoadingContext.Provider value={loading}>
            {children}
        </LoadingContext.Provider>);
}

export default LoadingProvider;
