import {FC, useState} from "react";
import classes from './Counter.module.scss'

export const CounterComponent: FC = () => {
    const [counter, setCounter] = useState(0);

    const counterHandle = () => {
        setCounter(counter + 1);
    }

    return <div className={classes.button}>
        <h1>{counter}</h1>
        <button onClick={counterHandle}>Increment</button>
    </div>
}