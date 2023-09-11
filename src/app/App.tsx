import { Suspense, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames("app", { selected: true }, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(prev => !prev)}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium
                    temporibus doloribus sed eveniet molestias sunt ullam non provident. Alias nobis
                    odit temporibus perspiciatis quaerat dicta, totam quas eos dolorum?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
