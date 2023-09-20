import { Action, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
    initialState?: StateSchema,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    asyncReducers?: ReducersMapObject<StateSchema, Action<any>>
) => {
    const reducerManager = createReducerManager({
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    });

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
