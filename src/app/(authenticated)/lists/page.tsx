import React from 'react';
import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";
import { ListItem } from '@/components/list/list-item';
import { ILista } from '@/interfaces/ILista';


export default function HomePage() {

    

    const listasExemplo: ILista[] = [
        {
            id: "lista1",
            usuarioId: "usuario123",
            tipoListaId: {
                id: "tipo1",
                usuarioId: "usuario123",
                nome: "Lista de Tarefas",
                criadoEm: new Date(),
                atualizadoEm: new Date(),
                personalizacao: {
                    id: "personalizacao1",
                    icone: "📝", // Ícone para o tipo de lista
                    cor: "#4CAF50", // Cor verde
                    criadoEm: new Date(),
                    atualizadoEm: new Date(),
                },
            },
            nome: "Minha Lista de Compras",
            criadoEm: new Date(),
            atualizadoEm: new Date(),
            personalizacao: {
                id: "personalizacao2",
                icone: "🛒", // Ícone para a lista
                cor: "#FF9800", // Cor laranja
                criadoEm: new Date(),
                atualizadoEm: new Date(),
            },
        },
        {
            id: "lista2",
            usuarioId: "usuario124",
            tipoListaId: {
                id: "tipo2",
                usuarioId: "usuario124",
                nome: "Lista de Compras",
                criadoEm: new Date(),
                atualizadoEm: new Date(),
                personalizacao: {
                    id: "personalizacao3",
                    icone: "🛍️", // Ícone para o tipo de lista
                    cor: "#2196F3", // Cor azul
                    criadoEm: new Date(),
                    atualizadoEm: new Date(),
                },
            },
            nome: "Lista de Compras para Festa",
            criadoEm: new Date(),
            atualizadoEm: new Date(),
            personalizacao: {
                id: "personalizacao4",
                icone: "🎉", // Ícone para a lista
                cor: "#FF5722", // Cor laranja escuro
                criadoEm: new Date(),
                atualizadoEm: new Date(),
            },
        },
        {
            id: "lista3",
            usuarioId: "usuario125",
            tipoListaId: {
                id: "tipo3",
                usuarioId: "usuario125",
                nome: "Lista de Atividades",
                criadoEm: new Date(),
                atualizadoEm: new Date(),
                personalizacao: {
                    id: "personalizacao5",
                    icone: "📅", // Ícone para o tipo de lista
                    cor: "#9C27B0", // Cor roxa
                    criadoEm: new Date(),
                    atualizadoEm: new Date(),
                },
            },
            nome: "Lista de Estudos",
            criadoEm: new Date(),
            atualizadoEm: new Date(),
            personalizacao: {
                id: "personalizacao6",
                icone: "📖", // Ícone para a lista
                cor: "#FFEB3B", // Cor amarela
                criadoEm: new Date(),
                atualizadoEm: new Date(),
            },
        },
    ];

    return (
        <>

            <header className='mb-3'>
                <h1 className="text-4xl font-bold mb-3">Suas listas</h1>
                {
                    listasExemplo && listasExemplo.length !== 0 ? (
                        <Button>
                            <ListPlus className="mr-2" />
                            Nova lista
                        </Button>
                    ) : ''
                }

            </header>
            <main>
                {
                    listasExemplo && listasExemplo.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                            <p className="text-xl mb-4 text-center">Crie já sua primeira lista.</p>
                            <Button>
                                <ListPlus className="mr-2" />
                                Nova lista
                            </Button>
                        </div>

                    ) :
                        (
                            <div className="container mx-auto px-4 py-8">

                                <div className="space-y-4">
                                    {listasExemplo.map((lista) => (
                                        <ListItem
                                            key={lista.id}
                                            lista={lista}
                                            tipoLista={lista.tipoListaId}
                                        />
                                    ))}

                                </div>
                            </div>
                        )
                }
            </main>
        </>
    );
}
