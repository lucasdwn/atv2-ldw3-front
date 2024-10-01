import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tarefas",
  description: "Gerir tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <ThemeProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
