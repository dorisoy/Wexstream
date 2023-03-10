import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const classes = {
    backdrop: theme => ({
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        // background: 'rgba(0,0,0,0.7)'
    })
}

const SimpleBackdrop = (props) => (
    <div>
        <Backdrop sx={classes.backdrop} open={true}>
            {props.text}
            {props.progress ? <CircularProgress color="inherit" /> : null}
        </Backdrop>
    </div>
)

export default SimpleBackdrop