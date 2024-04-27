import { ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type TSpringType = typeof import("@react-spring/web");
type TGestureType = typeof import("@use-gesture/react");

interface TAnimationContextPayload {
    Gesture?: TGestureType;
    Spring?: TSpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<TAnimationContextPayload>({});

// Обе библиотеки зависят друг от друга
const getAsyncAnimationModules = () => {
    return Promise.all([import("@react-spring/web"), import("@use-gesture/react")]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<TAnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<TSpringType>();
    const GestureRef = useRef<TGestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({ Spring: SpringRef.current, Gesture: GestureRef.current, isLoaded }),
        [isLoaded]
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
