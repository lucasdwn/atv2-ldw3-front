import { EmojiPickerComponent } from "@/components/emojiPicker";
import ThemeSwitch from "@/components/theme/themeSwitch";

export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <ThemeSwitch />
            <h1>Emoji Picker com Next.js e TypeScript</h1>
            <EmojiPickerComponent />
        </div>
    );
}
