'use client';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../ui/switch';
import { useTheme } from './themeProvider';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <span>{theme === 'light' ? (<Sun className="h-6 w-6 mr-2  text-[#ffa909]" />) : (<Moon className="h-6 w-6 mr-2  text-[#ffffff]" />)}</span>
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Ativar/desativar modo escuro" 
                aria-checked={theme === 'dark'} 
                className="peer inline-flex h-5 w-9 cursor-pointer items-center rounded-full"
            />
        </div>
    );
};

export default ThemeSwitch;
