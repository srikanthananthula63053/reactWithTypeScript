import { createContext, useContext, useState } from "react";

const ThemProviderContext = createContext<string | undefined>(undefined)

export function ThemProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemProviderContext.Provider value="hello">
            {
                children
            }
        </ThemProviderContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemProviderContext)
    if (context === undefined)
        throw new Error('useTheme must be used within the ThemProvider')
    return context
}