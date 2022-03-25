import React from "react";
import { Container, useStyles } from "./styled"
import { TextField, Button, FormControl } from '@material-ui/core'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const CreateClassPage = () => {
    const classes = useStyles();


    const [modulo, setModulo] = React.useState('');

    const handleChange = (event) => {
        setModulo(event.target.value);
    };

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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
            <Button color="primary">Voltar</Button>
        </Container>
    )
}

export default CreateClassPage