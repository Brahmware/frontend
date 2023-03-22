import styled from "@emotion/styled";
import { colors } from "../../muiTheme/theme";
import { Divider as MuiDivider } from "@mui/material";

export const Divider = styled(MuiDivider)(({ onColor, offColor }) => ({
    backgroundColor: colors.border
}));