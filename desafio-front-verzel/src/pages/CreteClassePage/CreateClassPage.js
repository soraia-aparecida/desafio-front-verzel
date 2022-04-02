import React from "react"
import { Container, useStyles } from "./styled"
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import { useRequestedModule } from "../../hooks/useRequestModule"
import useForm from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectedPage"

const CreateClassPage = () => {
    useProtectedPage()
    
    const classes = useStyles()
    const navigate = useNavigate()

    const modulos = useRequestedModule()
    console.log(modulos)

    const [form, onChange, cleanFields] = useForm({
        name: "",
        date: "",
        moduleId: ""
    })


    const mapModule = modulos.map((item) => {
        return (
            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
     )
    })
    const [modulo, setModulo] = React.useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setModulo(event.target.value);
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     requests.requestCreateModule(form)
    //     cleanFields()
    // };

    return (
        <Container>
            <h1>Castrar nova aula</h1>
            <form className={classes.root} noValidate>

                <FormControl variant="outlined" className={classes.margin}>
                    <InputLabel id="demo-simple-select-outlined-label">Módulo</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={modulo}
                        onChange={handleChange}
                        label="Módulo"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                       {mapModule}
                    </Select>
                </FormControl>

                <TextField
                    className={classes.margin}
                    label="Nome da aula"
                    variant="outlined"
                    required
                />
                <TextField
                    id="date"
                    label="Data da aula"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true, }}
                    className={classes.margin}
                />
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Casdastrar </Button>
            </form>
            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container>
    )
}

export default CreateClassPage