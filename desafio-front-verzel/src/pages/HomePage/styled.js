import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    margin-left: 1vw;
    h3{
        margin-top: 5vh;
        /* margin-bottom: 3vh; */
    },
    h2{
        margin-top: 5vh;
        /* margin-bottom: 3vh; */
    },
   
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
   
`

export const useStyles2 = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
    },
    inline: {
        display: 'inline',
    },
   
}))



export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "#5cb646",


    },
}));