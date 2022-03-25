import axios from "axios";
import {BASE_URL} from '../constants/url'

// REQUISIÇÃO PARA LOGAR
export const login = (body,  setState) => {
    const url = BASE_URL + '/login'

    const request = axios.post(url, body, navigate)

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        navigate('/admin')
    }).catch((err) => {
        notify("error", err.response.data.message)
       
    })
}