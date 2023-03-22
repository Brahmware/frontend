import styled from "@emotion/styled";
import { colors } from "../../muiTheme/theme";
import { Switch } from "@mui/material";

export const SwitchComponent = styled(Switch)(({ onColor, offColor }) => ({
    "& .MuiSwitch-thumb": {
        backgroundColor: offColor
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
        },
    }
}));