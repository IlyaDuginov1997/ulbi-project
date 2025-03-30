import React, {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';
import AboutLazy from "./pages/About/AboutLazy";
import HomeLazy from "./pages/Home/HomeLazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App: FC = () => {
    const {toggleTheme, theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomeLazy/>}/>
                    <Route path="/about" element={<AboutLazy/>}/>
                </Routes>
            </Suspense>

        </div>

    )
}

export default App;