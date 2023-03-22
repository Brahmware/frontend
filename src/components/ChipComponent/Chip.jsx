import { styled, Chip as MuiChip } from "@mui/material";

const Chip = styled(MuiChip)(() => (
    {
        height: 'unset',
        width: 'unset',
        padding: '0.125em 0.25em'
    }));

export default Chip;