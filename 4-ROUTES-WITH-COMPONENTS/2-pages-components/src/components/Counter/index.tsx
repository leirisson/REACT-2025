import { useState } from "react";

type CounterProps = {
  initialValue: number;
};

export function Counter({ initialValue }: CounterProps) {
  const [value, setValue] = useState<number>(initialValue);

  function increment(){
    setValue(prev => prev + 1)
  }

  function decremenmt(){
    setValue(prev => prev - 1)
  }

  function resetCounter(){
    setValue(0)
  }

  return(<>
    <div>
        <p>Counter: {value}</p>
        <button onClick={increment}>+</button>
        <button onClick={decremenmt}>-</button>
        <button style={{color: '#fff', background:'red'}} onClick={resetCounter}>Reset</button>
    </div>
  </>)
}
