import axios from "axios";
import { BASE_URL } from '../constants/url'

// REQUISIÇÃO PARA LOGAR
export const login = (body, navigate) => {
    const url = BASE_URL + 'user/login'
    const request = axios.post(url, body)

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        navigate('/admin')
    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA PEGAR TODOS OS MÓDULOS
export const getModules = (setState) => {
    const url = BASE_URL + 'module'
    const request = axios.get(url)

    request.then((res) => {
        setState(res.data.modules)

    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA CADASTRAR NOVO MÓDULO
export const createModule = (body) => {

    const url = BASE_URL + 'module/add'
    const request = axios.post(url, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    request.then((res) => {
        alert(res.data.message)
    }).catch((err) => {
        alert(err.response.data)
    })
}


//REQUISIÇÃO PARA EDITAR MÓDULO
export const editModule = (id, body) => {

    const token = localStorage.getItem('token')
    const url = BASE_URL + `module/edit/${id}`
    const request = axios.put(url, body, {
        headers: {
            auth: token
        }
    })

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA DELETAR MÓDULO
export const deleteModule = (body) => {
    const id = { "id": body }
    const url = BASE_URL + `module/delete`
    const request = axios.delete(url, id, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    console.log("oi", localStorage.getItem('token'))
    console.log("id", id)
    
    request.then((res) => {
        alert(res.data.message)
    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA PEGAR TODOS AS AULAS DE UM MÓDULOS
export const getClasseByModule = (id, setState) => {
    const url = BASE_URL + `classe/${id}`
    const request = axios.get(url)

    request.then((res) => {
        setState(res.data.classes)

    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA CADASTRAR NOVAS AULAS
export const createClasse = (body) => {
    const url = BASE_URL + `classe/add`
    const request = axios.get(url, body)

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA EDITAR AULA
export const editClasse = (id, body) => {

    const token = localStorage.getItem('token')
    const url = BASE_URL + `classe/edit/${id}`
    const request = axios.put(url, body, {
        headers: {
            auth: token
        }
    })

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}

//REQUISIÇÃO PARA DELETAR AULA
export const deleteClasse = (body) => {

    const token = localStorage.getItem('token')
    const url = BASE_URL + `classe/delete`
    const request = axios.delete(url, body, {
        headers: {
            auth: token
        }
    })

    request.then((res) => {
    }).catch((err) => {
        alert(err.response.data)
    })
}
