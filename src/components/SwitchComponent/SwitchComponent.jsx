import styled from "@emotion/styled";
import { colors, scales, transition } from "../../muiTheme/theme";
import { Switch } from "@mui/material";

export const SwitchComponent = styled(Switch)(({ onColor, offColor }) => ({
    "& .MuiSwitch-thumb": {
        backgroundColor: offColor,
        transition: transition('fast'),
    },


    "& .MuiSwitch-track": {
        backgroundColor: `${colors.muted} !important`
    },

    "& .Mui-checked": {
        "& .MuiSwitch-thumb": {
            backgroundColor: `${onColor} !important`
        },
    },

    "&:hover": {
        '& .MuiSwitch-thumb': {
            transform: `scale(${scales.medium})`
        },

        "& .MuiTouchRipple-root": {
            backgroundColor: offColor,
            opacity: 0.15,
        },

        "& .Mui-checked": {
            "& .MuiTouchRipple-root": {
                backgroundColor: onColor,
                opacity: 0.15,
            },
        },
    },

    "& .Mui-disabled": {
        "& .MuiSwitch-thumb": {
            backgroundColor: colors.text__color__dark,
            transform: 'none'
        },
    }
}));