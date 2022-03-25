import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ClassePage from "../pages/ClassesPage/ClassesPage"
import CreateModulePage from "../pages/CreateModulePage/CreateModulePage"
import CreateClassPage from "../pages/CreteClassePage/CreateClassPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegistrePage from '../pages/RegistrePage/RegistrePage'

const Router = () => {
    return (
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/cadastro"} element={<RegistrePage />} />
                <Route path={"/entrar"} element={<LoginPage />} />
                <Route path={"/admin"} element={<AdminHomePage />} />
                <Route path={"/cadastrar-modulo"} element={<CreateModulePage />} />
                <Route path={"/cadastrar-aula"} element={<CreateClassPage />} /> 
                <Route path={`/aulas/:id`} element={<ClassePage />} /> 
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router