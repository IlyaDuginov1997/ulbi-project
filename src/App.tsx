import {FC} from "react";
import {CounterComponent} from "./components/Counter";
import './global.scss'

export const App: FC = () => {
    return (<div className={'App'}>
        Hello world
        <CounterComponent/>
    </div>)
}