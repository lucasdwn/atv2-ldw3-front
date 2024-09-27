'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { CircleChevronLeft, CircleChevronRight, ListCheck, CircleUserRound, List, Share2, LogOut } from 'lucide-react'
import ThemeSwitch from './theme/themeSwitch'

export default function Navbar({ onNavbarToggle }: { onNavbarToggle: (isOpen: boolean) => void }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        onNavbarToggle(!isOpen);
    };

    useEffect(() => {
        onNavbarToggle(isOpen);
    }, [isOpen, onNavbarToggle]);

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 left-4 z-10 flex lg:hidden"
                        onClick={toggleNavbar}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <CircleChevronLeft /> : <CircleChevronRight />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center" className="ml-2">
                    <span>{isOpen ? 'Fechar' : 'Abrir'}</span>
                </TooltipContent>
            </Tooltip>

            <aside className={` 
                    absolute top-0 left-0 h-screen bg-white dark:bg-[#1E1E1E] transition-all duration-300 ease-in-out 
                    ${isOpen ? ' w-full lg:w-64 z-20' : 'w-0 lg:w-16'} 
                `}>
                <div className="flex flex-col h-full justify-between p-4">
                    <div>
                        <div className={`flex items-center justify-between mb-2 ${isOpen ? 'flex-row' : 'flex-col'}`}>
                            <div className="flex items-center">
                                <ListCheck className={`text-violet-600 w-8 h-8 mr-2 ${isOpen ? 'flex' : 'hidden lg:mr-0'} lg:flex`} />
                                {isOpen && <span className="text-xl font-bold">List-tasks</span>}
                            </div>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={`w-auto items-center justify-center align-center ${isOpen ? '' : 'mt-2 hidden lg:flex'}`}
                                        onClick={toggleNavbar}
                                        aria-label={isOpen ? "Close menu" : "Open menu"}
                                    >
                                        {isOpen ? <CircleChevronLeft className={isOpen ? '' : 'mr-2'} /> : <CircleChevronRight className={isOpen ? '' : 'mr-2'} />}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" align="center" className="ml-2">
                                    <span>{isOpen ? 'Fechar' : 'Abrir'}</span>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <div className={`flex w-full justify-start mb-5 ${isOpen ? '' : 'hidden'} `}>
                            <ThemeSwitch />
                        </div>
                        <nav className={`${isOpen ? 'space-y-2' : 'lg:flex lg:flex-col lg:items-center lg:justify-between lg:mb-8'}`}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" className={`w-full justify-start ${isOpen ? 'w-full justify-start' : 'lg:w-auto lg:items-center lg:justify-center'} `}>
                                        <CircleUserRound className="mr-2" />
                                        {isOpen && <span>Perfil</span>}
                                    </Button>
                                </TooltipTrigger>
                                {!isOpen &&
                                    <TooltipContent side="right" align="center" className="ml-2">
                                        <span>Perfil</span>
                                    </TooltipContent>
                                }
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" className={`w-full justify-start ${isOpen ? 'w-full justify-start' : 'lg:w-auto lg:items-center lg:justify-center'} `}>
                                        <List className="mr-2" />
                                        {isOpen && <span>Minhas listas</span>}
                                    </Button>
                                </TooltipTrigger>
                                {!isOpen &&
                                    <TooltipContent side="right" align="center" className="ml-2">
                                        <span>Minhas listas</span>
                                    </TooltipContent>
                                }
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" className={`w-full justify-start ${isOpen ? 'w-full justify-start' : 'lg:w-auto lg:items-center lg:justify-center'} `}>
                                        <Share2 className="mr-2" />
                                        {isOpen && <span>Listas compartilhadas</span>}
                                    </Button>
                                </TooltipTrigger>
                                {!isOpen &&
                                    <TooltipContent side="right" align="center" className="ml-2">
                                        <span>Listas compartilhadas</span>
                                    </TooltipContent>
                                }
                            </Tooltip>
                        </nav>
                    </div>
                    <nav className={`${isOpen ? 'space-y-2' : 'lg:flex lg:flex-col lg:items-center lg:justify-between lg:mb-8'}`}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" className={`w-full ${isOpen ? 'w-full justify-start' : 'lg:w-auto lg:items-center lg:justify-center'} `}>
                                    <LogOut className={`w-auto ${isOpen ? 'mr-2' : ''}`} />
                                    {isOpen ? <span>Sair</span> : null}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>Sair</span>
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                </div>
            </aside>
        </>
    )
}
