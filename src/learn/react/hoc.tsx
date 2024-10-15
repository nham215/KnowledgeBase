import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthProps {
    isAuthenticated: boolean;
}

export default function withAuth<T extends AuthProps>(WrappedComponent: React.ComponentType<T>) {
    return (props: Omit<T, 'isAuthenticated'> & AuthProps) => {
        const { isAuthenticated, ...rest } = props as AuthProps;

        if (!isAuthenticated) {
            return <Navigate to="/login" replace />;
        }

        return <WrappedComponent {...(rest as T)} isAuthenticated={isAuthenticated} />;
    };
}