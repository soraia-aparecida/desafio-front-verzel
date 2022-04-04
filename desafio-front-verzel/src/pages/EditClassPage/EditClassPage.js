import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import useForm from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import GlobalStateContext from "../../context/GlobalStateContext"
import Header2 from "../../components/Header/Header2"

const EditClassPage = () => {
    useProtectedPage()

    const classes = useStyles()
    const navigate = useNavigate()

    const { requests } = useContext(GlobalStateContext)

    const pathParams = useParams()
    const id = pathParams.id

    const [form, onChange, cleanFields] = useForm({
        name: "",
        classDate: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        requests.requestEditClasse(id, form)
        cleanFields()
    }

    return (
        <Container>
            <header>
                <Header2 />
            </header>
            <h1>Editar informações da aula </h1>

            <form className={classes.root} noValidate onSubmit={handleSubmit}>
                <TextField
                    className={classes.margin}
                    label="Novo nome da aula"
                    variant="outlined"
                    value={form.name}
                    required
                    name='name'
                    onChange={onChange}
                />
                <TextField
                    className={classes.margin}
                    label="Nova data da aula"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true, }}
                    value={form.classDate}
                    name='classDate'
                    onChange={onChange}
                    required
                />
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Editar aula </Button>
            </form>

            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container>
    )
}

export default EditClassPage