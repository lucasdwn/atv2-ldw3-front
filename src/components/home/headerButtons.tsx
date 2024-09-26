'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeaderButtons() {
    const router = useRouter();

    return (
        <div className="space-x-4">
            <Button variant="outline" onClick={() => router.push('/login')}>Entrar</Button>
            <Button className="bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100" onClick={() => router.push('/register')}>Cadastrar-se</Button>
        </div>
    );
}
