import { useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CopyIcon } from "@/shared/assets";

import styles from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";

interface ICodeProps {
    text: string;
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Code = ({ text, className }: ICodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.code, {}, [className])}>
            <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={styles.copyIcon} onClick={onCopy} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
