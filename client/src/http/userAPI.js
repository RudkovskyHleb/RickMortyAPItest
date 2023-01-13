import {$authHost, $host, $beUrl} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $beUrl.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $beUrl.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.id)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const findUserInfo = async (id) => {
    const {data} = await $beUrl.get('api/user',
        {params:{id:id}})

    return data
}
