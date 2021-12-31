import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const ChangedButton=withStyles((theme)=>({
    root:{
        backgroundColor:'orange',
        '&:hover':{
            background:'blue'
        }
    }
}))(Button)

export default function button() {
    return (
        <div>
            <ChangedButton>Click Me 2</ChangedButton>
        </div>
    )
}
