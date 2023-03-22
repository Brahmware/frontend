import { styled, TextField } from "@mui/material";

const ThemedField = styled(TextField)(() => (
    {
        '& fieldset': {
            borderRadius: '0.33em',
        }
    }));

export default ThemedField;