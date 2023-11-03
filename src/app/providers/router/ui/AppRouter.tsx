import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "shared/config/routerConfig/routerConfig";
import { Loader } from "widgets/Loader/ui/Loader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<Loader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
