import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    header{
        width: 100%;
        margin-top: -1.5vh;
    }
    h1{
        margin-top: 5vh;
        margin-bottom: 3vh;
    },
    h2{
        margin-top: 3vh;
        margin-bottom: 3vh;
    },
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    },   
`

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root2: {
        width: 320,
        backgroundColor: '#90ee90',
        margin: theme.spacing(2),
    },
    cardButton: {
        marginTop: theme.spacing(30)
    },

}))