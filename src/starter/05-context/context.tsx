import { createContext, useContext, useState } from "react";

type Theme = 'dark' | 'light' | 'system'

type ThemProviderState = {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

type ThemProviderProps = {
    children: React.ReactNode,
    defaultTheme?: Theme
}

const ThemProviderContext = createContext<ThemProviderState | undefined>(undefined)

export function ThemProvider({ children }: ThemProviderProps) {
    const [theme, setTheme] = useState<Theme>('dark')
    return (
        <ThemProviderContext.Provider value={{ theme, setTheme }}>
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