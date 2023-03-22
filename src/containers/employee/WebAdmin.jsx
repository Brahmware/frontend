import React from 'react'
import WebAdminLogin from '../../components/web-admin-form'
import { selectCurrentError, selectCurrentErrorMessage } from '../../features/errors/errorSlice';
import { useSelector } from 'react-redux';
import { Box, Collapse, Typography } from '@mui/material';
import { colors } from '../../muiTheme/theme';

const WebAdmin = () => {

    const currentError = useSelector(selectCurrentError);
    const currentErrorMessage = useSelector(selectCurrentErrorMessage);

    return (
        <div className='web-admin'>
            <div className="if-statement if-open-statement">
                {"if ("}<p>webEditor</p>{") {"}
            </div>
            <WebAdminLogin />
            <Collapse
                in={currentError !== null}
                sx={{ width: '25em' }}
            >
                <Box
                    width={'100%'}
                    sx={{
                        marginTop: '1em',
                        backgroundColor: colors.danger,
                        borderRadius: '1em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        color={'white'}
                        fontSize={'0.8em'}
                        padding={'1em 0'}
                        fontWeight={'medium'}
                    >
                        {currentErrorMessage || "Something went worng! Try again."}
                    </Typography>
                </Box>

            </Collapse>
            <p className="if-statement if-close-statement">
                {"}"}
            </p>
        </div>
    )
}

export default WebAdmin