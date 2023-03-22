import { Collapse, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../muiTheme/theme'

const CollapsableError = ({ growCondition, padding, children, transform }) => {
    return (
        <Collapse
            in={growCondition}
            sx={{
                position: 'absolute',
                width: '100%',
                padding: padding ? padding : '0 1em',
                marginTop: '0.2em',
                transform: transform && transform
            }}
        >
            <Typography
                component={'p'}
                fontSize={'0.65em'}
                color={colors.danger}
                lineHeight={'1em'}
            >
                {children}
            </Typography>
        </Collapse>
    )
}

export default CollapsableError