import {FC, useState} from "react";
import './Counter.scss'

export const CounterComponent: FC = () => {
    const [counter, setCounter] = useState(0);

    const counterHandle = () => {
        setCounter(counter + 1);
    }

    return <div>
        <h1>{counter}</h1>
        <button onClick={counterHandle}>Increment</button>
    </div>
}