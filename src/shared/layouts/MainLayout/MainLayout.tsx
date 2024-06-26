import { ReactElement } from "react";
import styles from "./MainLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface IMainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = ({ className, header, content, sidebar, toolbar }: IMainLayoutProps) => {
    return (
        <div className={classNames(styles.mainLayout, {}, [className])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
