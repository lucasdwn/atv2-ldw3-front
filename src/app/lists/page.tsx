'use client';
import { useState } from "react";
import Navbar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";

export default function HomePage() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = (isOpen: boolean) => {
        setIsNavbarOpen(isOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-black">
            <Navbar onNavbarToggle={handleNavbarToggle} />

            <main className={`flex-1 p-4 lg:p-8 transition-all duration-300 ${isNavbarOpen ? 'lg:ml-64' : 'lg:ml-16'} pt-16 lg:pt-8`}>
                <h1 className="text-4xl font-bold mb-8">Suas listas</h1>
                <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                    <p className="text-xl mb-4 text-center">Crie já sua primeira lista.</p>
                    <Button>
                        <ListPlus className="mr-2" />
                        Nova lista
                    </Button>
                </div>
            </main>
        </div>
    );
}
