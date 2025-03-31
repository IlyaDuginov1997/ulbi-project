import React, {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/About";
import {HomePage} from "pages/Home";

const App: FC = () => {
    const {toggleTheme, theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>

        </div>

    )
}

export default App;