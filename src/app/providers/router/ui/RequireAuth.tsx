import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { RouterPath } from "@/shared/config/routerConfig/routerConfig";
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
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RouterPath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};
