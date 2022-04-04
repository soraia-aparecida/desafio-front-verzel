import React, { useContext, useEffect } from "react"
import { Container, useStyles } from "./styled"
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { goToHome } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import Header3 from "../../components/Header/Header3"
import GlobalStateContext from "../../context/GlobalStateContext"
import { useRequestedModule } from "../../hooks/useRequestModule"

const HomeClassPage = () => {

    const classes = useStyles()
    const navigate = useNavigate()

    const pathParams = useParams()
    const id = pathParams.id

    const { states, setters, requests } = useContext(GlobalStateContext)
    const modulos = useRequestedModule()

    const filterModule = modulos.filter((item) => {
        return item.id == id
    })

    useEffect(() => {
        setters.setClasse(requests.requestGetClasse(id))
    }, [])

    const mapClasse = states.classe?.map((item) => {
        return (
            <Card className={classes.root2} key={item.id}>
                <CardContent >
                    <Typography gutterBottom variant="h5" >
                        {item.name}
                    </Typography>
                    <h4>Disponível em: {item.classDate}</h4>
                </CardContent>
            </Card>
        )
    })

    const name = filterModule[0]?.name

    return (
        <Container >
            <header>
                <Header3 />
            </header>
            
            <h1>{name}</h1>
            <h2>Aulas disponíveis: </h2>
            <section>
                {mapClasse}
            </section>
            <Button color="primary" onClick={() => goToHome(navigate)} className={classes.cardButton}>Voltar</Button>
        </Container >
    )
}

export default HomeClassPage