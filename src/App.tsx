import React, {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';

import {CounterComponent} from "./components/Counter";
import AboutLazy from "./pages/About/AboutLazy";
import ProfileLazy from "./pages/Profile/ProfileLazy";

const App: FC = () => {
    return (
        <div className="app light">
            {/*<Link to={'/'}>Home</Link>*/}
            <Link to={'/about'}>About</Link>
            <Link to={'/profile'}>Profile</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/*<Route path="/" element={<CounterComponent/>}/>*/}
                    <Route path="/about" element={<AboutLazy/>}/>
                    <Route path="/profile" element={<ProfileLazy/>}/>
                </Routes>
            </Suspense>

        </div>

    )
}

export default App;