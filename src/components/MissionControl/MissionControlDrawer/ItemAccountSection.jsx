import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LogoutIcon } from '../../../assets/icons'
import { logOut, selectCurrentUser } from '../../../features/auth/authSlice'
import usePersist from '../../../hooks/usePersist'
import { colors } from '../../../muiTheme/theme'
import { DrawerItemButton } from './DrawerItem'

const ItemAccountSection = ({ drawerOpen }) => {

    const user = useSelector(selectCurrentUser);
    const history = useHistory();
    const dispatch = useDispatch();
    const [, setPersist] = usePersist();

    const handleLogoutClick = async () => {
        setPersist(false);
        dispatch(logOut());
    };

    return (
        <DrawerItemButton
            drawerOpen={drawerOpen}
            mb={'1.5em'}
            icon={
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'0.5em'}
                >
                    <IconButton
                        component={Button}
                        to={`/mission-control/account`}
                        color='primary'
                        sx={{ backgroundColor: 'transparent !important', }}
                    >
                        <Avatar
                            className={"icon__avatar"}
                            alt="Cindy Baker"
                            sx={{
                                width: 48,
                                height: 48,
                            }}
                            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    </IconButton >
                </Box>
            }
        >
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                marginLeft={'-0.8em'}
            >
                <Typography
                    component={Button}
                    fontSize={'1.25em'}
                    onClick={() => history.push(`/mission-control/account`)}
                    sx={{
                        p: 0,
                        m: 0,
                        backgroundColor: 'transparent !important',
                        "&:hover": {
                            color: colors.primary
                        }
                    }}
                >
                    {user}
                </Typography>
                <LoadingButton
                    loading={false}
                    loadingPosition="end"
                    color="inherit"
                    endIcon={<LogoutIcon height={'0.5em'} width={'0.5em'} />}
                    className={'logout__button'}
                    sx={{
                        padding: 0,
                        justifyContent: 'start',
                        fontWeight: 'light',
                        fontSize: '0.9em',
                        backgroundColor: 'transparent !important',
                        color: colors.danger,
                        '&:hover': {
                            '& #dark': {
                                fill: `${colors.danger} !important`,
                                '& path': {
                                    fill: `${colors.danger} !important`
                                }
                            },
                        },
                    }}
                    onClick={handleLogoutClick}
                >
                    Logout
                </LoadingButton>
            </Box>
        </DrawerItemButton >
    )
}

export default ItemAccountSection