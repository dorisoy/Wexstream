import React from 'react'
import { Link } from '@mui/material'
import { strings as commonStrings } from '../config/lang'
import Master from '../components/Master'

const NoMatch = (props) => {

    const noMatch = () => (
        <div className='content no-match'>
            <h2>{commonStrings.NO_MATCH}</h2>
            <p><Link href='/'>{commonStrings.GO_TO_HOME}</Link></p>
        </div>
    )

    return (
        props.hideHeader ? noMatch() : <Master strict={false}>{noMatch()}</Master>
    )
}

export default NoMatch