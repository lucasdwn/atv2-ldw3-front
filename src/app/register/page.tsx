'use client';
import { useState } from 'react';
import { ListChecks, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import registerImage from "../../assets/images/image-register.webp";
import ThemeSwitch from '@/components/theme/themeSwitch';
import PublicLayout from '../publicLayout';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import { useToast } from '@/hooks/use-toast';

export default function RegisterPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { register } = useAuth();
    const { toast } = useToast();
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast({
                title: `Erro ao criar usuário`,
                description: `As senhas não correspondem.`,
                variant: "destructive",
            });
            return;
        }

        setIsSubmit(true);
        try {
            await register(nome, email, password);
            toast({
                title: "Sucesso",
                description: "Usuario criado com sucesso!",
                variant: "default",
            });
            router.push('/listas/minhasListas')
        } catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
        finally {
            setIsSubmit(false);
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
                                Bem-vindo
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
                                Ei, bem-vindo ao seu novo lugar especial
                            </p>
                        </div>
                        <div className="mt-8">
                            <form className="space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                        Nome
                                    </label>
                                    <div className="mt-1">
                                        <Input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            className="dark:border-gray-100 dark:placeholder:text-gray-200"
                                            required
                                            placeholder="Insira seu nome..."
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                    </div>
                                </div>
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
                                <div className='flex gap-3'>
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
                                </div>
                                <div>
                                    <Button type="submit" className="w-full bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100" disabled={isSubmit}>
                                        {isSubmit ? 'Cadastrando...' : 'Cadastrar'}
                                    </Button>
                                </div>
                            </form>
                            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-100">
                                Já possui uma conta?{' '}
                                <Link href="/login" className="font-medium text-violet-purple hover:text-violet-purple-hover">
                                    logue aqui.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center relative w-full h-screen p-5">
                    <Image
                        className="inset-0 h-full w-full object-cover rounded-lg justify-center"
                        src={registerImage}
                        alt="Register illustration"
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </PublicLayout>
    );
}
