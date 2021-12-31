import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';

const useStyles=makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.primary.main,
        color:'red'
    },
    label:{
        backgroundColor:'green',
        
        '&:hover':{
            background:'blue'
        }
    }
}))

export default function Buttons() {
    const classes=useStyles()

    return (
        <div>
            <Button style={{color:'white'}} startIcon={<CallIcon/>} endIcon={<CallIcon/>} classes={{root:classes.root,label:classes.label}}>Click Me</Button>
        </div>
    )
}
