import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import useForm from '../../hooks/useForm'
import GlobalStateContext from "../../context/GlobalStateContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestedModule } from "../../hooks/useRequestModule"
import Header2 from "../../components/Header/Header2"
import Loading from '../../components/Loading/Loading'

const EditModulePage = () => {
    useProtectedPage()

    const { requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()

    const pathParams = useParams()
    const id = pathParams.id

    const classes = useStyles()
    const navigate = useNavigate()

    const filterModule = modulos.filter((item) => {
        return item.id == id
    })

    const nameModule = filterModule[0]?.name

    const [form, onChange, cleanFields] = useForm({
        name: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestEditModule(id, form)
        cleanFields()
    }

    return (
        <Container>
            <header>
                <Header2 />
            </header>
            
            {modulos.length > 0 ?
                <>
                    <h1>Editar nome do módulo: {nameModule}</h1>

                    <form className={classes.root} noValidate onSubmit={handleSubmit}>
                        <TextField
                            className={classes.margin}
                            label="Novo nome"
                            variant="outlined"
                            required
                            value={form.name}
                            name='name'
                            onChange={onChange}
                        />

                        <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Editar </Button>
                    </form>

                    <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
                </> : <Loading />
            }
        </Container>
    )
}

export default EditModulePage