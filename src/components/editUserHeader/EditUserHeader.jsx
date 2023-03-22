import { Paper, Typography, IconButton } from '@mui/material';
import React from 'react';
import { colors } from '../../muiTheme/theme';
import { Close as CloseIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../features/users/usersSlice';
import WithToolTip from '../TooltipComponent/WithTooltip';



const EditUserHeader = ({ handleClose }) => {

    const currentlyEditting = useSelector(selectedUser);

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '5em',
                padding: '0.6em 0.6em 0.6em 1.2em',
                backgroundColor: colors.black,
            }}
        >

            <Typography
                variant='h5'
                component='h5'
                fontWeight={'medium'}
                color={colors.primary}
            >
                {`Editting ${currentlyEditting.username}'s profile`}
            </Typography>

            <WithToolTip
                color={colors.danger}
                message={"Close Window"}
            >

                <IconButton
                    onClick={handleClose}
                    color='error'
                >
                    <CloseIcon sx={{ height: '1.25em', width: '1.25em' }} />
                </IconButton>
            </WithToolTip>

        </Paper>
    )
}

export default EditUserHeader