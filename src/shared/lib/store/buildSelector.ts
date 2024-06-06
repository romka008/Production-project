/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

import { StateSchema } from "@/app/providers/StoreProvider";

type TSelector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type THook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [THook<T, Args>, TSelector<T, Args>];

export const buildSelector = <T, Args extends any[]>(
    selector: TSelector<T, Args>
): Result<T, Args> => {
    const useSelectorHook: THook<T, Args> = (...args: Args) => {
        return useSelector((state: StateSchema) => selector(state, ...args));
    };

    return [useSelectorHook, selector];
};
