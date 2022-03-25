import React from "react"
import { Container, useStyles } from "./styled"
import {Button, Card, CardActions, CardContent, Typography }from '@material-ui/core'

const ClassePage = () => {
    const classes = useStyles()

    return (
        <Container >
            <h1>Modulo 1</h1>

            <h2>Aulas disponíveis</h2>

            <Card className={classes.root2}>
                <CardContent >
                    <Typography gutterBottom variant="h5" >
                        Lizard
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButton} flexGrow={1}>
                    <Button size="small" color="primary">Editar</Button>
                    <Button size="small" color="primary">Excluir  </Button>
                </CardActions>
            </Card>

        </Container >
    )
}

export default ClassePage