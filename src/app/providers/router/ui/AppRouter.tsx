import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { Loader } from "widgets/Loader/ui/Loader";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
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

export default AppRouter;
