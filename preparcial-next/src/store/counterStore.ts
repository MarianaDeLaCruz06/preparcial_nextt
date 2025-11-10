import  {createStore} from 'zustand'; 

export type CounterState =  {
    counter: number
}

export type CounterActions =  {
    initCount: () =>void; 
    decrement: () =>void; 
    increment: () =>void; 
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
    counter: 0
}

export const createCounterStore = (initState: CounterState =defaultInitState) => 
{
    return createStore<CounterStore>((set, get)=>({
        ...initState,
        initCount: ()=> set({counter:0}),
        increment: () => {
            set({counter: get().counter +1})
        },
        decrement: ()=>{
            set({counter: get().counter - 1})
        }
    }))
}