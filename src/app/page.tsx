import { ListChecks, List, Paintbrush, Share2 } from "lucide-react";
import homeImage from "../assets/images/image-home.png";
import Image from "next/image";
import ThemeSwitch from "@/components/theme/themeSwitch";
import { HeaderButtons } from "@/components/home/headerButtons";
import { BodyButtons } from "@/components/home/bodyButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="container mx-auto px-4 py-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:gap-0 ">
        <div className="flex justify-between sm:justify-normal items-center space-x-5">
          <div className="flex space-x-2 items-center">
            <ListChecks className="h-6 w-6 text-violet-purple" />
            <span className="text-xl font-bold">List-tasks</span>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>

        <div className="flex justify-center sm:flex sm:justify-normal">
          <HeaderButtons />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center text-center sm:text-left"> 
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Organize suas Tarefas de Forma Inteligente
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Gerencie suas listas, priorize tarefas, e colabore com facilidade. Simplifique seu fluxo de trabalho e compartilhe suas metas com quem quiser.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <BodyButtons />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={homeImage.src}
              alt="Task management illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <List className="h-12 w-12 mx-auto mb-4 text-violet-purple" />
            <h2 className="text-xl font-semibold mb-2">Crie listas</h2>
            <p className="text-gray-600 dark:text-gray-300">Organize suas tarefas de forma prática.</p>
          </div>
          <div className="text-center">
            <Paintbrush className="h-12 w-12 mx-auto mb-4 text-violet-purple" />
            <h2 className="text-xl font-semibold mb-2">Personalização</h2>
            <p className="text-gray-600 dark:text-gray-300">Defina prioridades, cores e categorias.</p>
          </div>
          <div className="text-center">
            <Share2 className="h-12 w-12 mx-auto mb-4 text-violet-purple" />
            <h2 className="text-xl font-semibold mb-2">Colaboração</h2>
            <p className="text-gray-600 dark:text-gray-300">Compartilhe listas e trabalhe com outros usuários.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
