import React, { useContext, useEffect } from "react"
import { Container, useStyles } from "./styled"
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, List, ListItem, Divider, ListItemText } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GlobalStateContext from "../../context/GlobalStateContext"
import { useRequestedModule } from "../../hooks/useRequestModule"


// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ImageIcon from '@material-ui/icons/Image';

const HomePage = () => {

    const { states, setters, requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()

    useEffect(()=> {
        for (let i = 0; i < modulos.length; i++) {
            requests.requestGetClasse(modulos[i].id)
            // console.log(modulos[i].id)
        }
        // console.log(states.classe)
    }, [])

   

    const classes = useStyles()

    // const aulas = setters.setClasse(requests.requestGetClasse(item.id))

    // const aulas = modulos.map((item) => {
    //     return (
    //         // <List className={classes.root}>
    //         //     <ListItem>
    //         //         * <ListItemText primary={() => setters.setClasse(requests.requestGetClasse(item.id))} />
    //         //     </ListItem>
    //         // </List>

    //         setters.setClasse(requests.requestGetClasse(item.id))
    //     )
    // })

    // console.log(states.classe)
    const mapModulos = modulos.map((item) => {
        return (
            < Card key={item.id}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} > M</Avatar>
                    }
                    title={item.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Aproveite esse módulo, e se torne um dev cada vez mais capacitado!
                    </Typography>
                </CardContent>

                <CardActions>
                    <p>Aulas disponíveis</p>

                </CardActions>
                <List className={classes.root}>
                    <ListItem>
                        
                       {/* * <ListItemText primary={states.classe}  /> */}
                    </ListItem>
                </List>
              

            </Card>
        )
    })




    return (
        <Container>
            <h3>Olá, seja bem-vindo!</h3>
            <p>Aqui temos vários cursos pra te ajudar a ser um DEV de sucesso! Venha conhecer nossos cursos 💻</p>
            <h2>Módulos disponíveis:</h2>

            <section>
                {mapModulos}

            </section>
        </Container>
    )
}

export default HomePage