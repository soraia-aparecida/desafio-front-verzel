import React from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { goToClasseByModule, goToCreateClasse, goToCreateModule } from "../../router/coodinator"

const AdminHomePage = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Container >
            <h1>Painel Admintrativo</h1>

            <div className={classes.root}>

                <Button variant="outlined" color="primary" onClick={() => goToCreateModule(navigate)}>Cadastrar novo módulo</Button>
                <Button variant="outlined" color="primary" onClick={() => goToCreateClasse(navigate)}> Cadastrar nova aula </Button>
            </div>

            <h2>Módulos disponíveis</h2>
            <section>
                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" onClick={() => goToClasseByModule(navigate, 1)}>Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" >Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>


                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" >Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" >Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>


                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" >Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>


                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
                        <Button size="small" >Aulas</Button>
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>

                </Card>
            </section>
        </Container >
    )
}

export default AdminHomePage