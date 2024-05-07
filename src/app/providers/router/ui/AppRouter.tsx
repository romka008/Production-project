import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps } from "@/shared/types/router";
import { routeConfig } from "../config/routeConfig";
import { Loader } from "@/shared/ui/Loader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
