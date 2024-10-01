'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EmojiClickData, Theme } from 'emoji-picker-react';

// Carrega o EmojiPicker dinamicamente
const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

interface EmojiPickerComponentProps {
    onEmojiSelect: (emoji: string) => void;
}

export const EmojiPickerComponent: React.FC<EmojiPickerComponentProps> = ({ onEmojiSelect }) => {
    const [pickerTheme, setPickerTheme] = useState<Theme>(Theme.LIGHT);

    // Atualiza o tema com base no localStorage ou na classe do documento
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

    // Função para tratar a seleção de emoji
    const onEmojiClick = (emojiObject: EmojiClickData) => {
        onEmojiSelect(emojiObject.emoji); // Chama a função passada via prop
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
