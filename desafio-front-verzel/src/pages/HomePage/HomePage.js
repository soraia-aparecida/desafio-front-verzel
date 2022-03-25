import React from "react"
import { Container, useStyles, useStyles2 } from "./styled"
import clsx from 'clsx'
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, List, ListItem, Divider, ListItemText } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const HomePage = () => {

    const classes = useStyles()
    const classes2 = useStyles2()

    const [expanded, setExpanded] = React.useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const modulos = [
        {
            id: "1",
            name: "Modulo 1",
        },
        {
            id: "2",
            name: "Modulo 2",
        }
    ]

    const aulas = [{
        id: "asasas",
        name: "aula 1",
        date: '25/10/2022',
        idModule: "1"
    },
    {
        id: "awwawaw",
        name: "aula 2",
        date: '25/10/2022',
        idModule: "1"
    },
    {
        id: 'aula 3dddd',
        name: "aula 3",
        date: '30/10/2022',
        idModule: "2"
    },
    {
        id: "addsds",
        name: "aula 4",
        date: '05/10/2022',
        idModule: "2"
    },
    {
        id: "addskk",
        name: "aula 5",
        date: '09/12/2022',
        idModule: "2"
    }]


    return (
        <Container>
            <h3>Olá, seja bem-vindo!</h3>
            <p>Aqui temos vários cursos pra te ajudar a ser um DEV de sucesso! Venha conhecer nossos cursos 💻</p>

            <h2>Módulos disponíveis:</h2>


            <section>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}> M</Avatar>
                        }
                        title={'Modulo1'}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Aproveite esse módulo, e se torne um dev cada vez mais capacitado!
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <p>Aulas disponíveis</p>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <List className={classes2.root}>
                                <ListItem alignItems="flex-start">

                                    <ListItemText

                                        primary={"aaaa"}
                                        secondary={
                                            <React.Fragment>
                                                {"25/10/2022"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </CardContent>
                    </Collapse>
                </Card>
            </section>
        </Container>
    )
}

export default HomePage