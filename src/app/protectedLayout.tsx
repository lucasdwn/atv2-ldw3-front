'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/sideBar';
import Loading from '@/components/loading';
import { useAuth } from '@/context/authContext';

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/'); // Redireciona se não estiver autenticado
        }
    }, [isAuthenticated, loading, router]);

    const handleNavbarToggle = (isOpen: boolean) => {
        setIsNavbarOpen(isOpen);
    };

    if (loading) {
        return <Loading />; // Exibe loading enquanto valida
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-black">
            <Navbar onNavbarToggle={handleNavbarToggle} />

            <main className={`flex-1 p-4 lg:p-8 transition-all duration-300 ${isNavbarOpen ? 'lg:ml-64' : 'lg:ml-16'} pt-16 lg:pt-8`}>
                {children}
            </main>
        </div>
    );
};

export default ProtectedLayout;
