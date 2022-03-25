import React from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { goToAdminHome } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"

const ClassePage = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Container >
            <h1>Modulo 1</h1>

            <h2>Aulas disponíveis</h2>
            <section>
                <Card className={classes.root2}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <p>Disponível em: 30/08/2022</p>
                    </CardContent>
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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
                    <CardActions className={classes.cardButton} flexGrow={1}>
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