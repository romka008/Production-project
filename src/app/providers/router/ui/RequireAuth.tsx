import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { getUserAuthData } from "entities/User";

interface IRequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        console.log("REDIRECT ON LOGIN");
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    return children;
};
