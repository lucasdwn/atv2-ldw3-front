'use client';
import { Switch } from '../ui/switch';
import { useTheme } from './themeProvider';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
            />
        </div>
    );
};

export default ThemeSwitch;
