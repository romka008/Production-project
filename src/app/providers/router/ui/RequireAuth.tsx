import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getRouteForbidden, getRouteMain } from "@/shared/const/router";
import { UserRole, getUserAuthData, getUserRoles } from "@/entities/User";

interface IRequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: IRequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return;
        }
        return roles.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        console.log("REDIRECT ON LOGIN");
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
};
