import { styled } from '@mui/system';
import React, { useState } from 'react'
import {
    Drawer as MuiDrawer,
    Box,
    Typography,
} from '@mui/material';
import { colors, drawerWidth } from '../../../muiTheme/theme';
import { MissionControlLogoFull, SeedOfLifeIcon } from '../../../assets/icons';
import { Divider } from '../../DividerComponent/DividerComponent';
import { drawerItems, editContents } from '../../../features/managableContents/drawerItems';
import { SwitchComponent } from '../../SwitchComponent/SwitchComponent';
import { DrawerItemButton, DrawerItemHeader, DrawerItemMenu } from './DrawerItem';
import ItemAccountSection from './ItemAccountSection';
import WithToolTip from '../../TooltipComponent/WithTooltip';


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const DrawerItem = ({ open, item }) => (
    <DrawerItemMenu
        drawerOpen={open}
        icon={item.icon}
        linkTo={item.path}
    >
        {item.name}
    </DrawerItemMenu>
);


const MissionControlDrawer = () => {

    const [open, setOpen] = useState(false);

    return (
        <Drawer
            className={'noselect'}
            variant="permanent"
            open={open}
            sx={{
                position: 'absolute',
                zIndex: 1,
                alignItems: 'center'
            }}
        >
            <DrawerHeader sx={{ justifyContent: 'center', p: 0 }}>
                <DrawerItemHeader
                    drawerOpen={open}
                    icon={<SeedOfLifeIcon />}
                >
                    <MissionControlLogoFull />
                </DrawerItemHeader>
            </DrawerHeader>

            <Divider />
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
            >
                {
                    drawerItems.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    !open ?
                                        <WithToolTip
                                            color={colors.primary}
                                            message={
                                                <Typography
                                                    color={colors.dark__card}
                                                    fontWeight={'medium'}
                                                    fontSize={'1em'}
                                                >
                                                    {item.name}
                                                </Typography>
                                            }
                                            tooltipPlacement="right"
                                        >
                                            <DrawerItem open={open} item={item} />
                                        </WithToolTip>
                                        :
                                        <DrawerItem open={open} item={item} />
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Box>

            <Divider />
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                flexGrow={1}
            >
                {
                    editContents.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    !open ?
                                        <WithToolTip
                                            color={colors.primary}
                                            message={
                                                <Typography
                                                    color={colors.dark__card}
                                                    fontWeight={'medium'}
                                                    fontSize={'1em'}
                                                >
                                                    {item.name}
                                                </Typography>
                                            }
                                            tooltipPlacement="right"
                                        >
                                            <DrawerItem open={open} item={item} />
                                        </WithToolTip>
                                        :
                                        <DrawerItem open={open} item={item} />
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Box>

            <Divider />
            <DrawerItemButton
                drawerOpen={open}
                icon={
                    <Box
                        height={'100%'}
                        width={'4.5em'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <WithToolTip
                            color={open ? colors.primary : colors.muted}
                            message={open ? "Close Drawer" : "Open Drawer"}
                            showChangeState={true}
                            tooltipPlacement={'right'}
                        >
                            <SwitchComponent
                                size='small'
                                color='default'
                                onColor={colors.primary}
                                offColor={colors.text__color}
                                onChange={() => setOpen(!open)}
                            />
                        </WithToolTip>
                    </Box>
                }
            />
            <ItemAccountSection drawerOpen={open} setDrawerOpen={setOpen} />
        </Drawer>
    )
}

export default MissionControlDrawer;