import styled from "@emotion/styled";
import { Tooltip as MuiTooltip, Zoom, colors, tooltipClasses } from "@mui/material";
import { speed } from "../../muiTheme/theme";

export const TooltipComponent = styled(({ className, ...props }) => (
    <MuiTooltip {...props} TransitionComponent={Zoom} classes={{ popper: className }} enterDelay={speed.fast} />
))(({ theme, color }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: color,
        color: colors.text__color,
        fontSize: theme.typography.pxToRem(12),
        borderRadius: '2em',
        zIndex: 10
    },
}));