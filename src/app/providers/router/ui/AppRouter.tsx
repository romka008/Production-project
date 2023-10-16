import { getUserAuthData } from "../../../../entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { Loader } from "widgets/Loader/ui/Loader";

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        element={<div className="page-wrapper">{element}</div>}
                        key={path}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
