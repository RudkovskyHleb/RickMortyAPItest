import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async (data) => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
             } else {
                data = await registration(email, password);
            }
            localStorage.setItem('auth', 'true')
            user.setUser(user)
            user.setIsAuth(true)
                   } catch (e) {
            alert(e)
        }

    }

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <div style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <form  className="d-flex flex-column">
                    <input name="email"
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input name="password"
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <button
                                                       onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
});

export default Auth;