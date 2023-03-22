import { Typography } from "@mui/material";
import React from "react";
import { TooltipComponent } from "./TooltipComponent";

const WithToolTip = ({
    className,
    index,
    color,
    textColor,
    message,
    children,
    showChangeState,
    tooltipPlacement,
    tooltipMargin,
    tooltipVanish,
    tooltipTimeout,
    ...others
}) => {

    const [show, setShow] = React.useState(false);

    const onMouseEnterBehaviour = () => {
        setShow(true);
        if (tooltipVanish) {
            setTimeout(() => setShow(false), tooltipTimeout || 2000);
        }
    }

    return (
        <React.Fragment key={index}>
            {
                message ?
                    <TooltipComponent
                        className={className}
                        title={message}
                        color={color}
                        textColor={textColor}
                        open={show}
                        disableHoverListener
                        onMouseEnter={onMouseEnterBehaviour}
                        onMouseLeave={() => setShow(false)}
                        placement={tooltipPlacement ? tooltipPlacement : 'bottom'}
                        tooltipMargin={tooltipMargin}
                        arrow={true}
                    >
                        <Typography
                            {...others}
                            className={className}
                            component='span'
                            onClick={() => !showChangeState && setShow(false)}
                        >
                            {children}
                        </Typography>
                    </TooltipComponent>
                    :
                    children
            }
        </React.Fragment>
    )

};

export default WithToolTip;