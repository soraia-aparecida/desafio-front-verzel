import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { goToClasseByModule, goToCreateClasse, goToCreateModule } from "../../router/coodinator"
import GlobalStateContext from "../../context/GlobalStateContext"
import { useRequestedModule } from "../../hooks/useRequestModule"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const AdminHomePage = () => {
    useProtectedPage()

    const classes = useStyles()
    const navigate = useNavigate()

    const { states, setters, requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()
    console.log(modulos)

    const result = modulos.map((item) => {
        return (
            <Card className={classes.root2} key={item.id}>
                <CardContent >
                    <Typography gutterBottom variant="h5" >
                        {item.name}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButton} >
                    <Button size="small" onClick={() => goToClasseByModule(navigate, item.id)}>Aulas</Button>
                    <Button size="small" >Editar</Button>
                    <Button size="small" onClick={() => requests.requestDeleteModule(item.id)}>Excluir  </Button>
                </CardActions>

            </Card>
        )
    })
  
    return (
        <Container >
            <h1>Painel Admintrativo</h1>

            <div className={classes.root}>
                <Button variant="outlined" color="primary" onClick={() => goToCreateModule(navigate)}>Cadastrar novo módulo</Button>
                <Button variant="outlined" color="primary" onClick={() => goToCreateClasse(navigate)}> Cadastrar nova aula </Button>
            </div>

            <h2>Módulos disponíveis</h2>
            <section>
                {result}
            </section>

        </Container >
    )
}

export default AdminHomePage