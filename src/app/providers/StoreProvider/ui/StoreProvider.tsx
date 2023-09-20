import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Action, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
    const store = createReduxStore(
        initialState as StateSchema,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        asyncReducers as ReducersMapObject<StateSchema, Action<any>>
    );

    return <Provider store={store}>{children}</Provider>;
};
