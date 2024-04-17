'use client';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface CommandBarContextType {
    isOpen: boolean;
    toggleCommandBar: () => void;
}

const CommandBarContext = createContext<CommandBarContextType | undefined>(undefined);

export const useCommandBar = () => {
    const context = useContext(CommandBarContext);
    if (!context) {
        throw new Error('useCommandBar must be used within a CommandBarProvider');
    }
    return context;
};

export const CommandBarProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCommandBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggleCommandBar();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <CommandBarContext.Provider value={{ isOpen, toggleCommandBar }}>
            {children}
        </CommandBarContext.Provider>
    );
};
