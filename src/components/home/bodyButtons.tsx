'use client';

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

import { Play } from "lucide-react";

export function BodyButtons() {
    const router = useRouter();
    return (
        <div className="space-x-4">
            <div className=" flex space-x-4 mt-4">
                <Button className="bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100" onClick={() => router.push('/register')}>
                    Cadastrar-se
                </Button>
                <Button variant="outline" className="flex items-center">
                    <a
                        href="https://youtu.be/CLVGwIY8FI8?si=hObgmrQO4bhFrUWx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        Assistir <Play className="mr-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        </div>
    );
}
