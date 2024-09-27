import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";
import ProtectedLayout from "../protectedLayout";

export default function HomePage() {
    return (
        <ProtectedLayout>
            <h1 className="text-4xl font-bold mb-8">Suas listas</h1>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                <p className="text-xl mb-4 text-center">Crie já sua primeira lista.</p>
                <Button>
                    <ListPlus className="mr-2" />
                    Nova lista
                </Button>
            </div>
        </ProtectedLayout>
    );
}
