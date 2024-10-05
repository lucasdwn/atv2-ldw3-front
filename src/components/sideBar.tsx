'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { CircleChevronLeft, CircleChevronRight, ListCheck, CircleUserRound, List, Share2, LogOut, FileType, ShieldAlert } from 'lucide-react'
import ThemeSwitch from './theme/themeSwitch'
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation'

export default function Navbar({ onNavbarToggle }: { onNavbarToggle: (isOpen: boolean) => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const { logout } = useAuth();
    const router = useRouter();
    const { innerWidth: width, innerHeight: height } = window;

    const toggleNavbar = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        onNavbarToggle(newIsOpen);
        localStorage.setItem('isNavbarOpen', JSON.stringify(newIsOpen));
    };

    const routePush = (route: string) => {
        router.push(route);
        if (innerWidth < 1024) {
            toggleNavbar();
        }
    }

    useEffect(() => {
        const storedIsOpen = localStorage.getItem('isNavbarOpen');

        if (storedIsOpen !== null) {
            const parsedIsOpen = (innerWidth < 1024 ? false : JSON.parse(storedIsOpen));
            setIsOpen(parsedIsOpen);
            onNavbarToggle(parsedIsOpen);
        }
    }, []);

    return (
        <>

            <div className='fixed top-0  z-10 flex bg-gray-100  dark:bg-[#1E1E1E] w-full justify-start lg:hidden shadow-xl'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className=" "
                            onClick={toggleNavbar}
                            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                            style={{ minWidth: '44px', minHeight: '44px' }}
                        >
                            {isOpen ? <CircleChevronLeft aria-hidden="true" /> : <CircleChevronRight aria-hidden="true" />}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="ml-2">
                        <span>{isOpen ? 'Fechar' : 'Abrir'}</span>
                    </TooltipContent>
                </Tooltip>
                <div className="flex items-center ml-2">
                    <ListCheck className={`text-violet-600 w-8 h-8 mr-1 lg:flex`} />
                    <span className="text-xl font-bold">List-tasks</span>
                </div>
            </div>

            <aside className={` 
                    fixed top-0 left-0 h-screen bg-white dark:bg-[#1E1E1E] transition-all duration-300 ease-in-out 
                    ${isOpen ? ' w-full lg:w-64 z-20' : 'w-0 lg:w-16'} 
                `}>
                <div className={`flex flex-col h-full justify-between p-4  lg:flex ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
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
                                        className={`w-auto items-center justify-center align-center hidden lg:flex ${isOpen ? 'flex' : 'mt-2 hidden lg:flex'}`}
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
                            <div className={` border-b border-gray-400 mt-2 ${isOpen ? 'flex' : 'hidden'}`}>
                                <span className={`text-sm font-medium `}></span>
                            </div>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}
                                        style={{ minWidth: '44px', minHeight: '44px' }}
                                        onClick={() => routePush('/perfil')}
                                    >
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
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}
                                        onClick={() => routePush('/listas/minhasListas')}
                                    >
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
                                    <Button
                                        variant="ghost" className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}
                                        onClick={() => routePush('/listas/listasCompartilhadas')}
                                    >
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
                            <div className={` border-b border-gray-400 mt-2 ${isOpen ? 'flex' : 'hidden'}`}>
                                <span className={`text-sm font-medium `}>Personalizações</span>
                            </div>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost" className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}
                                        onClick={() => routePush('/tiposDeListas')}
                                    >
                                        <FileType className="mr-2" />
                                        {isOpen && <span>Tipos de lista</span>}
                                    </Button>
                                </TooltipTrigger>
                                {!isOpen &&
                                    <TooltipContent side="right" align="center" className="ml-2">
                                        <span>Tipos de lista</span>
                                    </TooltipContent>
                                }
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost" className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}
                                        onClick={() => routePush('/prioridades')}
                                    >
                                        <ShieldAlert className="mr-2" />
                                        {isOpen && <span>Prioridades</span>}
                                    </Button>
                                </TooltipTrigger>
                                {!isOpen &&
                                    <TooltipContent side="right" align="center" className="ml-2">
                                        <span>Prioridades</span>
                                    </TooltipContent>
                                }
                            </Tooltip>
                        </nav>
                    </div>
                    <nav className={`${isOpen ? 'space-y-2' : 'lg:flex lg:flex-col lg:items-center lg:justify-between lg:mb-8'}`}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={logout} variant="ghost" className={`w-full justify-start hidden lg:flex ${isOpen ? 'w-full justify-start flex' : 'lg:w-auto lg:items-center lg:justify-center'} `}>
                                    <LogOut className={`w-auto ${isOpen ? 'mr-2' : ''}`} />
                                    {isOpen ? <span>Sair</span> : null}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" align="center" className="ml-2">
                                <span>Sair</span>
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                </div>
            </aside>
        </>
    )
}
