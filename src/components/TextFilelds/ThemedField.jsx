import { styled, TextField } from "@mui/material";
import { colors } from "../../muiTheme/theme";

const ThemedField = styled(TextField)(({ buttonBackground }) => (
    {
        '& fieldset': {
            borderRadius: '0.33em',
        },

        '& .MuiInputAdornment-root': {
            padding: 0,
            margin: 0,

            '& button': {
                backgroundColor: buttonBackground ? buttonBackground : 'inherit',
                borderRadius: '0.33em'
            }
        },

        "&:has(.Mui-disabled)": {
            backgroundColor: colors.disabled,
            borderRadius: '0.33em 0.33em 0 0',
            overflow: 'hidden',

            "& label": {
                color: colors.disabled__text,
                backgroundColor: 'unset !important'
            }
        },

        "& .Mui-disabled": {
            backgroundColor: `${colors.disabled} !important`,
        },

        /* '& .MuiInputBase-root': {
            paddingRight: '0.4em',

            '& button': {
                borderRadius: '50%',
                backgroundColor: colors.primary
            }
        } */

    }));

export default ThemedField;