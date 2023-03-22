import React from 'react';
import { drawerWidth } from '../../muiTheme/theme';
import {
    IconButton,
    Toolbar,
    Typography,
    styled,
    AppBar as MuiAppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const MissionControlHeader = ({ open, handleDrawerOpen }) => {

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton> */}
            </Toolbar>
        </AppBar>
    )
}

export default MissionControlHeader