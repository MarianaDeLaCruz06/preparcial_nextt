'use client';

import { useCounterStore } from '../app/providers/counter-store-provider';

export default function CartCounter() {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const initCount = useCounterStore((state) => state.initCount);

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg w-52">
      <h2 className="text-xl font-semibold mb-2">Contador</h2>
      <p className="text-2xl mb-3">{counter}</p>
      <div className="flex gap-2">
        <button onClick={decrement} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
        <button onClick={increment} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
        <button onClick={initCount} className="bg-gray-400 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
}
