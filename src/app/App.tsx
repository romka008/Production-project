import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Loader } from "@/shared/ui/Loader";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, initAuthData } from "@/entities/User";

import { AppRouter } from "./providers/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const App = () => {
    const { theme } = useTheme();
    const inited = useSelector(getUserInited);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <Loader />;
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <div className={classNames("app_redesigned", { selected: true }, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={<div>asdfg</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames("app", { selected: true }, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
};
