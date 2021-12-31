import React from 'react'
import { Button,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
    cards:{
        width:'30vh',
        height:'30vh',
        background:'yellow'
    }
}))


export default function ThemesUi() {
    const classes=useStyles()
    return (
        <div>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Theme1
                </Button>
                <Button variant="contained" color='secondary'>Theme2</Button>
                <Card className={classes.cards}>HI</Card>
            </div>
    )
}
