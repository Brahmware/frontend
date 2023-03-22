import { Box, Button, IconButton, SvgIcon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors, transition } from '../../../muiTheme/theme'

const listItemStyle = {
    display: 'block',
    '& #light, & #dark': {
        transition: transition('fast'),
        opacity: '1 !important',
        '& path': {
            transition: transition('fast'),
            opacity: '1 !important'
        }
    },

    '& #light': {
        fill: colors.text__color,
        '& path': {
            fill: colors.text__color,
        }
    },

    '& #dark': {
        fill: colors.muted,
        '& path': {
            fill: colors.muted,
        }
    },

    '& .icon__avatar': {
        border: `2px solid ${colors.text__color__dark}`,
        transition: transition('fast'),
    },

    '&:hover': {

        '& .item__name > span': {
            color: colors.primary
        },

        '& #dark': {
            fill: colors.primary,
            '& path': {
                fill: colors.primary
            }
        },

        '& .icon__avatar': {
            border: `2px solid ${colors.primary}`,
        },

        "& .logout__button": {
            '& #dark': {
                fill: colors.muted,
                '& path': {
                    fill: colors.muted,
                }
            },
        }

    }
}

export const DrawerItemHeader = ({
    drawerOpen,
    icon,
    children
}) => {
    return (
        <Button
            component={Link}
            to='/mission-control'
            sx={{
                ...listItemStyle,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            {icon}
            <Box
                width={0}
                height={'100%'}
                position="relative"
            >
                <Box position={'absolute'} height={'100%'} sx={{ p: '1em' }}>
                    {
                        drawerOpen &&
                        <Box
                            height={'100%'}
                            display="flex"
                            justifyContent={'flex-start'}
                            alignItems="center"
                            color={colors.text__color}
                            sx={{
                                "& svg": {
                                    height: '100%'
                                }
                            }}
                        >
                            {children}
                        </Box>
                    }
                </Box>
            </Box>
        </Button>
    )
}

export const DrawerItemMenu = ({
    drawerOpen,
    icon,
    children,
    linkTo,
    noLink
}) => {
    return (
        <Button
            component={!noLink && Link}
            to={`/mission-control${linkTo}`}
            sx={{
                ...listItemStyle,
                width: '100%',
                height: '4em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                py: '0.5em',
                backgroundColor: noLink && 'transparent !important',

                "& .MuiTouchRipple-root": {
                    display: noLink ? 'none' : 'block'
                }
            }}
        >
            <Box
                height={'4em'}
                width={'4em'}
                padding={'1em'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    "& svg": {
                        height: '100%'
                    }
                }}
            >
                {icon}
            </Box>
            <Box
                width={0}
                height={'100%'}
                position="relative"
            >
                <Box position={'absolute'} height={'100%'} sx={{ p: '1em' }}>
                    {
                        drawerOpen &&
                        <Box
                            height={'100%'}
                            display="flex"
                            justifyContent={'flex-start'}
                            alignItems="center"
                            color={colors.text__color}
                            sx={{
                                "& svg": {
                                    height: '100%'
                                }
                            }}
                        >
                            {children}
                        </Box>
                    }
                </Box>
            </Box>
        </Button>
    )
}

export const DrawerItemButton = ({
    drawerOpen,
    icon,
    children,
    mb
}) => {
    return (
        <Box
            sx={{
                ...listItemStyle,
                height: '4em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                py: '0.5em',
                mb: mb && mb,
            }}
        >
            {icon}
            <Box
                width={0}
                height={'100%'}
                position="relative"
            >
                <Box position={'absolute'} height={'100%'} sx={{ p: '1em' }}>
                    {
                        drawerOpen &&
                        <Box
                            height={'100%'}
                            display="flex"
                            justifyContent={'flex-start'}
                            alignItems="center"
                            color={colors.text__color}
                            sx={{
                                "& svg": {
                                    height: '100%'
                                }
                            }}
                        >
                            {children}
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}