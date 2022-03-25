export const goToHome = (history) => {
    history("/")
}
export const goToLogin = (history) => {
    history("/entrar")
}
export const goToRegister = (history) => {
    history("/cadastro")
}
export const goToAdminHome = (history) => {
    history("/admin")
}

export const goToCreateModule= (history) => {
    history("/cadastrar-modulo")
}

export const goToCreateClasse= (history) => {
    history("/cadastrar-aula")
}

export const goToClasseByModule= (history, id) => {
    history(`/aula/${id}`)
}

