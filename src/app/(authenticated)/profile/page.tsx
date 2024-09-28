'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { apiService } from '@/services/apiService';

interface User {
    nome: string;
    email: string;
    senha?: string;
    criadoEm?: Date;
    atualizadoEm?: Date;
}

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState<User>({
        nome: '',
        email: '',
        senha: '',
    });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => {
        setIsEditing(false);
        setPassword('');
        setConfirmPassword('');
    };


    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('As senhas não correspondem.');
            return;
        }

        const updatedUser = {
            nome: userData.nome,
            email: userData.email,
            senha: password || undefined,
        };

        try {
            await apiService.makeRequest('/usuario/update', {
                method: 'PUT',
                body: JSON.stringify(updatedUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setIsEditing(false);
            setError('');
            setPassword('');
            setConfirmPassword('');
            fetchUserData();
        } catch (error: any) {
            setError(error.message);
        }
    };
    const fetchUserData = async () => {
        try {
            const response = await apiService.makeRequest('/usuario/currentUser');
            if (response) {
                setUserData({
                    nome: response.nome,
                    email: response.email,
                    criadoEm: response.criadoEm ? new Date(response.criadoEm) : undefined,
                    atualizadoEm: response.atualizadoEm ? new Date(response.atualizadoEm) : undefined
                });
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    function getInitials(name: string): string {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    }


    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <header>
                <h1 className="text-4xl font-bold mb-8">Perfil</h1>
            </header>
            <main>
                <div className="min-h-screen bg-gray-100 dark:bg-black  px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <CardHeader className="relative h-48 bg-gray-200">
                                <Image
                                    src="https://imgur.com/bKNeZzP.png"
                                    alt="Profile cover"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                                    <Avatar className="w-24 h-24 border-4 border-white">
                                        <AvatarImage src="" alt="Profile picture" />
                                        <AvatarFallback>{getInitials(userData.nome)}</AvatarFallback>
                                    </Avatar>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-16">
                                <form className="space-y-4">
                                    {error && <p className="text-red-600">{error}</p>}
                                    <div>
                                        <Label htmlFor="name">Nome</Label>
                                        <Input
                                            id="name"
                                            value={userData.nome}
                                            onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                                            disabled={!isEditing}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">E-mail</Label>

                                        <Input
                                            id="email"
                                            type="email"
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    {isEditing ? (
                                        <>
                                            <div>
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                                    Senha
                                                </label>
                                                <div className="mt-1 relative">
                                                    <Input
                                                        id="password"
                                                        name="password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        className="dark:border-gray-100 dark:placeholder:text-gray-200 pr-10"
                                                        placeholder="Insira sua senha..."
                                                        autoComplete="current-password"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <div
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                                                        ) : (
                                                            <Eye className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                                    Confirmar senha
                                                </label>
                                                <div className="mt-1 relative">
                                                    <Input
                                                        id="confirm-password"
                                                        name="confirm-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        className="dark:border-gray-100 dark:placeholder:text-gray-200 pr-10"
                                                        placeholder="Confirme sua senha..."
                                                        autoComplete="current-password"
                                                        required
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                    <div
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                                                        ) : (
                                                            <Eye className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) :
                                        (

                                            <div className='flex w-full gap-2'>
                                                <div className='w-full'>
                                                    <Label htmlFor="criadoem">Data de criação</Label>
                                                    <Input
                                                        id="criadoem"
                                                        type="date"
                                                        value={userData.criadoEm ? userData.criadoEm.toISOString().split('T')[0] : ''}
                                                        disabled
                                                    />
                                                </div>
                                                <div className='w-full'>
                                                    <Label htmlFor="atualizadoEm">Ultima atualização</Label>
                                                    <Input
                                                        id="atualizadoEm"
                                                        type="date"
                                                        value={userData.atualizadoEm ? userData.atualizadoEm.toISOString().split('T')[0] : ''}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        )}
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-end space-x-2">
                                {!isEditing ? (
                                    <Button onClick={handleEdit}>Editar</Button>
                                ) : (
                                    <>
                                        <Button variant="outline" onClick={handleCancel}>Cancelar</Button>
                                        <Button onClick={handleSave}>Salvar</Button>
                                    </>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    );
}
