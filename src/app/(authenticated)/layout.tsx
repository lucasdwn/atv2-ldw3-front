// app/(authenticated)/layout.tsx - Arquivo layout para rotas autenticadas

'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import Navbar from '@/components/sideBar';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading';

interface AuthenticatedLayoutProps {
    children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, loading, router]);

    const handleNavbarToggle = (isOpen: boolean) => {
        setIsNavbarOpen(isOpen);
    };

    if (!isAuthenticated || loading) {
        return <Loading />;
    }

    return (

        <>
            {!isAuthenticated && null}
            {isAuthenticated &&
                <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-black">
                    <Navbar onNavbarToggle={handleNavbarToggle} />

                    <main className={`flex-1 p-4 lg:p-8 transition-all duration-300 ${isNavbarOpen ? 'lg:ml-64' : 'lg:ml-16'} pt-16 lg:pt-8`}>
                        {children}
                    </main>
                </div>
            }
        </>
    );
}
