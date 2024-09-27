'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export function BodyButtons() {
    const router = useRouter();

    const handleWatchClick = () => {
        window.open("https://youtu.be/CLVGwIY8FI8?si=hObgmrQO4bhFrUWx", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex space-x-4 mt-4">
            <Button
                className="bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100"
                onClick={() => router.push('/register')}
            >
                Cadastrar-se
            </Button>
            <Button
                variant="outline"
                className="flex items-center"
                onClick={handleWatchClick}
            >
                Assistir <Play className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
}
