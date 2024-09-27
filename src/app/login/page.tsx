// LoginPage.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ListChecks, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginImage from "../../assets/images/image-login.png";
import ThemeSwitch from '@/components/theme/themeSwitch';
import PublicLayout from '../publicLayout';
import { useAuth } from '@/context/authContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            router.push('/lists')
        } catch (error: any) {
            setError(error.message);
        }
    };


    return (
        <PublicLayout>
            <div className="flex min-h-screen relative">
                <div className="absolute top-4 left-4 z-50">
                    <ThemeSwitch />
                </div>

                <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="flex items-center text-lg font-semibold text-primary mb-8">
                            <ListChecks className="h-6 w-6 mr-2 text-violet-purple" />
                            List-tasks
                        </div>
                        <div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Olá,
                            </h2>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Bem-vindo de volta
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
                                Ei, bem-vindo de volta ao seu lugar especial
                            </p>
                        </div>

                        <div className="mt-8">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                {error && <p className="text-red-600">{error}</p>}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                        E-mail
                                    </label>
                                    <div className="mt-1">
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="dark:border-gray-100 dark:placeholder:text-gray-200"
                                            required
                                            placeholder="Insira seu e-mail..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

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
                                    <Button type="submit" className="w-full bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100">
                                        Entrar
                                    </Button>
                                </div>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-100">
                                Não possui uma conta ainda?{' '}
                                <Link href="/register" className="font-medium text-violet-purple hover:text-violet-purple-hover">
                                    Cadastre-se aqui.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center items-center relative w-full h-screen p-5">
                    <Image
                        className="inset-0 h-full w-full object-cover rounded-lg justify-center"
                        src={loginImage.src}
                        alt="Login illustration"
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>
        </PublicLayout>
    );
}
