import React from "react";

export const LoginFormLazy = React.lazy(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!! ТОЛЬКО ДЛЯ ДАННОГО КУРСА
            setTimeout(() => resolve(import("./LoginForm")), 1500);
        })
);
