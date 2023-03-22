import React from 'react'
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import { EmojiEmotions as DefaultIcon } from '@mui/icons-material';

const LoadingIconButton = (props) => {

    const {
        className,
        isLoading,
        color,
        loadingColor,
        onClick,
        icon,
        size,
        children,
        ...other
    } = props;

    return (
        <React.Fragment>
            {
                props.isLoading ?
                    <IconButton
                        {...other}
                        aria-label={`${props.ariaLabel}-disabled`}
                        color='muted'
                        disabled
                    >
                        <CircularProgress
                            size={size}
                            color={loadingColor ? loadingColor : 'muted'}
                        />
                    </IconButton> :
                    <IconButton
                        {...other}
                        aria-label={props.ariaLabel}
                        color={color}
                        onClick={onClick}
                    >
                        {children}
                    </IconButton>
            }
        </React.Fragment>
    )
}

LoadingIconButton.defaultProps = {
    isLoading: false,
    color: 'primary',
    icon: <DefaultIcon />,
    onClick: () => { },
    size: '1em'

};

LoadingIconButton.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func,
    size: PropTypes.string,
    loadingColor: PropTypes.string,

};

export default LoadingIconButton;