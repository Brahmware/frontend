import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';
import { colors, transition } from '../../muiTheme/theme';

const commonProperties = {
    padding: 0,
    margin: 0,
    height: '100%',
    justifyContent: 'center',
    borderRadius: '0.33em',
    gap: '1em',

    '& .MuiButton-startIcon': {
        margin: 0,
    },

    '& svg, & p, & span': {
        transition: transition('fast')
    },

    '& #light': {
        fill: colors.darker__card,
        '& path': {
            fill: colors.darker__card,
        }
    },

    '& #dark': {
        fill: colors.primary__dark,
        '& path': {
            fill: colors.primary__dark,
        }
    },

    "&.Mui-disabled": {
        '& svg': {
            '& #light': {
                fill: colors.disabled__text,
                '& path': {
                    fill: colors.disabled__text,
                }
            },

            '& #dark': {
                fill: colors.dark__card,
                '& path': {
                    fill: colors.dark__card,
                }
            },
        },

        '& p, & span': {
            color: colors.disabled__text
        }
    },

    '&:has(.MuiLoadingButton-loadingIndicator)': {
        '& .MuiButton-startIcon': {
            display: 'none'
        }
    },


    '& .MuiLoadingButton-loadingIndicator': {
        fontSize: '0.85em',
        left: 'unset !important',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(0.75)',

        '& span': {
            height: 'unset !important',
            width: 'unset !important',
            fontSize: '2em',
        }

    }
}

export const LoadingButtonBig = styled(LoadingButton)({
    ...commonProperties,

    '& svg': {
        height: '2em',
        width: '2em',
    },

    '& .MuiLoadingButton-loadingIndicator>span': {
        fontSize: '2em'
    }

});

export const LoadingButtonSmall = styled(LoadingButton)({
    ...commonProperties,
    padding: '1.5em',


    '& svg': {
        height: '1em',
        width: '1em'
    },

    '& .MuiLoadingButton-loadingIndicator>span': {
        fontSize: '2em'
    }

})