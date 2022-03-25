import React from "react";
import { Container, useStyles } from "./styed"
import { TextField, Button } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator";
import { useNavigate } from "react-router-dom";

const CreateModulePage = () =>{
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Castrar novo módulo</h1>
            <form className={classes.root} noValidate>
                <TextField
                    className={classes.margin}
                    label="Nome do módulo"
                    variant="outlined"
                    required
                />

                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Casdastrar </Button>
            </form>
            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container>
    )
}

export default CreateModulePage