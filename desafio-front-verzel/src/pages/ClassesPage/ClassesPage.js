import React, { useContext } from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import Header2 from "../../components/Header/Header2"
import GlobalStateContext from "../../context/GlobalStateContext"
import { useRequestedModule } from "../../hooks/useRequestModule"

const ClassePage = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const pathParams = useParams()
    const id = pathParams.id

    const { states, setters, requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()

    const filterModule = modulos.filter((item) =>{
       return item.id == id
    })

    console.log(filterModule)
    const name = filterModule[0]?.name
    console.log(name)

    return (
        <Container >
            <header>
                <Header2 />
            </header>
            <h1>{name}</h1>

            <h2>Aulas disponíveis</h2>
            <section>
                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} >
                        <Button size="small" >Editar</Button>
                        <Button size="small" >Excluir  </Button>
                    </CardActions>
                </Card>
            </section>
            <Button color="primary" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
        </Container >
    )
}

export default ClassePage