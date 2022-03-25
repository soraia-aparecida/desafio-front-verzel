import React from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

const AdminHomePage = () => {
    const classes = useStyles()

    return (
        <Container >
            <h1>Painel Admintrativo</h1>

            <div className={classes.root}>

                <Button variant="outlined" color="primary">Cadastrar novo módulo</Button>
                <Button variant="outlined" color="primary"> Cadastrar nova aula </Button>
            </div>

            <h2>Módulos disponíveis</h2>
            <Card className={classes.root2}>
                <CardContent >
                    <Typography gutterBottom variant="h5" >
                        Lizard
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButton} flexGrow={1}>
                    <Button size="small" color="primary">Aulas</Button>
                    <Button size="small" color="primary">Editar</Button>
                    <Button size="small" color="primary">Excluir  </Button>
                </CardActions>
            </Card>

        </Container >
    )
}

export default AdminHomePage