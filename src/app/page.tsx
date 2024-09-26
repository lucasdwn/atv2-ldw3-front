import ThemeSwitch from "@/components/theme/themeSwitch";

export default function Home() {
  return (
    <div className="p-4" >
      <h1 className="text-2xl">Change Theme Example</h1>
      <ThemeSwitch />
    </div>
  );
}
