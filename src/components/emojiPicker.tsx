'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EmojiClickData, Theme } from 'emoji-picker-react';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

export const EmojiPickerComponent: React.FC = () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
    const [pickerTheme, setPickerTheme] = useState<Theme>(Theme.LIGHT);

    const updateTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        setPickerTheme(currentTheme === 'dark' || document.documentElement.classList.contains('dark') ? Theme.DARK : Theme.LIGHT);
    };

    useEffect(() => {
        updateTheme();

        window.addEventListener('storage', updateTheme);

        return () => {
            window.removeEventListener('storage', updateTheme);
        };
    }, []);

    const onEmojiClick = (emojiObject: EmojiClickData) => {
        setSelectedEmoji(emojiObject.emoji);
    };

    return (
        <EmojiPicker
            onEmojiClick={onEmojiClick}
            theme={pickerTheme}
            height={350}
            width={350}
        />
    );
};
