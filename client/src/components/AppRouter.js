import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom'
import { publicRoutes} from "../routes";

import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

        </Routes>
    );
});

export default AppRouter