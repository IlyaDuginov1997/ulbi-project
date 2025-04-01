import React, {FC} from "react";
import {Link} from "react-router-dom";

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App: FC = () => {
    const {toggleTheme, theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <AppRouter/>

        </div>

    )
}

export default App;