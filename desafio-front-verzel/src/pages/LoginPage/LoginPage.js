import React from "react"
import { Container, useStyles } from "./styled"
import { TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Button } from '@material-ui/core'
import clsx from 'clsx'
import { Visibility, VisibilityOff } from '@material-ui/icons';


const LoginPage = () => {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <h1>Login</h1>
            <form className={classes.root} noValidate>
                <TextField
                    type="email"
                    className={classes.margin}
                    label="E-mail"
                    variant="outlined"
                    required

                />
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" required>Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={'trocar pelo onChande do hook  Form'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                </FormControl>
                <Button variant="contained" color="primary" className={classes.withoutLabel} type="submit"> Entrar </Button>
            </form>
        </Container>
    )
}

export default LoginPage