import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { colors } from '../../muiTheme/theme';
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton';
import WithToolTip from '../TooltipComponent/WithTooltip';

const applicationFileTypes = {
    IMAGE: 'image'
};

const MAX_FILE_SIZE = 10485760 /* 10MB in bytes */

const UploadImage = ({
    elementClassName,
    ariaLabel,
    color,
    message,
    children,
    border,
    opacity,
    onChange
}) => {

    const [file, setFile] = useState({});
    const [error, setError] = useState('');

    const nullifyFileWithError = (errorMessage) => {
        setFile({});
        setError(errorMessage);
    };

    const chooseFileFromFS = (event) => {
        let fileData = event.target.files[0];
        if (!fileData) return nullifyFileWithError('');
        if (!fileData.type.includes(applicationFileTypes.IMAGE)) return nullifyFileWithError("Unsupported File Type!");
        if (!fileData.size > MAX_FILE_SIZE) return nullifyFileWithError("Too big! Max 10MB.")

        setFile(fileData);
    };




    return (
        <Box
            className={elementClassName}
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: '0.5em',
                border: border ? `1px solid ${color}` : 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: opacity ? opacity : 1,

                '&:hover': {
                    border: border ? `1.5px solid ${colors.white}` : 0,
                }
            }}
        >
            {console.log(file)}

            <WithToolTip
                message={message}
                color={colors.success}
            >
                <LoadingIconButton
                    aria-label={ariaLabel ? ariaLabel : 'upload-file'}
                    color={color}
                    component="label"
                >
                    <input hidden accept="image/*" type="file" onChange={chooseFileFromFS} />
                    {children}
                </LoadingIconButton>
            </WithToolTip>

            {
                error &&
                <Typography
                    noWrap
                    textAlign={'center'}
                    className='noselect'
                    color='error'
                >
                    {error}
                </Typography>
            }
        </Box>
    )
}

export default UploadImage