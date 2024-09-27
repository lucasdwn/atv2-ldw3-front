'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading';
import { useAuth } from '@/context/authContext';

interface PublicLayoutProps {
    children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            router.push('/lists');
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        return <Loading />;
    }

    return <>{children}</>;
};

export default PublicLayout;
