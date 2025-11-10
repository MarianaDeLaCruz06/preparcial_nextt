'use client'

import { createContext, ReactNode, useContext, useRef } from "react";
import { CounterStore, createCounterStore } from "@/store/counterStore";
import { useStore } from "zustand";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi |undefined >(
    undefined
)

export interface CounterStoreProviderProps{
    children: ReactNode
}

export const CounterStoreProvider = ({children }: CounterStoreProviderProps) => {
    const storeRef = useRef<CounterStoreApi | null>(null);
    if (storeRef.current === null){
        storeRef.current  = createCounterStore({counter: 0 });
    }

    return <CounterStoreContext.Provider value={storeRef.current}>
            {children}
           </CounterStoreContext.Provider>
}

export const useCounterStore = <T,> (selector:(store: CounterStore)=> T,): T => {
    const counterStoreContext = useContext(CounterStoreContext)

    if (!counterStoreContext){
        throw new Error('useCounterStore must be used within CounterStoreProvider')
    }

    return useStore(counterStoreContext, selector)
}