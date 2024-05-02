import { CombinedState, Reducer } from "redux";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { scrollSaveReducer } from "@/features/ScrollSave";
import { createReducerManager } from "./reducerManager";

import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const reducerManager = createReducerManager({
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    });

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
