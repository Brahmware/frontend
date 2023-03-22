import React, { useState } from 'react';
import {
    EmailVerifiedIcon,
    GetOtpToEmailIcon,
    VerifyEmailIcon
} from '../../assets/icons';
import { Box, IconButton, InputAdornment, Typography, Zoom } from '@mui/material';
import { Controller } from 'react-hook-form';
import ThemedField from '../TextFilelds/ThemedField';
import CollapsableError from '../TextFilelds/CollapsableError';
import { LoadingButtonBig, LoadingButtonSmall } from '../LoadingButtonWithIcon';
import { OTP } from '../../utils/patterns';
import { colors } from '../../muiTheme/theme';
import {
    Edit as EditAttributes,
    RotateLeftOutlined as ResendOtpIcon
} from '@mui/icons-material';
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton';
import WithToolTip from '../TooltipComponent/WithTooltip';
import { useSelector } from 'react-redux';
import { selectItemsForOTP } from '../../features/contact/contactSlice';

const helperTextObject = {
    email_otp: {
        required: "Email OTP is Required.",
        pattern: "Wrong OTP"
    },
};

const EmailOTP = ({
    isOtpCorrect,
    setIsOtpCorrect,
    formControl,
    handleFormSubmit
}) => {

    const [otpRecieved, setOtpRecieved] = useState(false);
    const { fullName, email } = useSelector(selectItemsForOTP);

    const handleGetOtp = () => {
        handleFormSubmit((data) => {
            console.log(data)
        });
        setOtpRecieved(true);
    };

    const [isLoading, setIsLoading] = useState(false);

    if (isOtpCorrect) {
        return (
            <Box
                className="contact__us-form_receive_email_verified noselect"
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'end'}
                alignItems={'center'}
                gap={'1em'}
                sx={{
                    height: '100%',
                    backgroundColor: colors.disabled,
                    padding: '0.5em',
                    borderRadius: '0.33em',
                    position: 'relative'
                }}
            >
                <WithToolTip
                    color={colors.primary}
                    textColor={colors.darker__card}
                    message={"Edit Details"}
                    className={'noselect'}
                    tooltipPlacement="right"
                    showChangeState={false}
                    tooltipVanish={false}
                    sx={{
                        position: 'absolute',
                        top: '0.5em',
                        right: '0.5em'
                    }}
                >
                    <LoadingIconButton
                        aria-label='edit user'
                        onClick={() => console.log("hi")}
                        color={'primary'}
                        loadingColor={'primary'}
                        size='small'
                        variant='contained'
                        isLoading={false}
                        sx={{
                            backgroundColor: colors.primary,
                            border: `0.05em solid ${colors.primary}`,

                            '& .edit-attribute-icon': {
                                fill: colors.darker__card,
                            },

                            '&:hover': {
                                '& .edit-attribute-icon': {
                                    fill: colors.primary
                                }
                            }
                        }}
                    >
                        <EditAttributes className='edit-attribute-icon' fontSize="small" />
                    </LoadingIconButton>
                </WithToolTip>
                <EmailVerifiedIcon
                    height={'4em'}
                    width={'4em'}
                />
                <Typography
                    fontSize={'1.2em'}
                    color={'primary'}
                >
                    Email is verified
                </Typography>
            </Box>
        )
    }

    if (!otpRecieved) {
        return (
            <LoadingButtonBig
                className='contact__us-form_receive_email_otp noselect'
                variant='contained'
                color='primary'
                loading={false}
                loadingPosition='start'
                type='submit'
                onClick={handleGetOtp} /* {() => setIsLoading(!isLoading)} */
                /* disabled={!email || !fullName.firstName || fullName.lastName} */
                startIcon={
                    <GetOtpToEmailIcon /* style={{ transform: 'translateY(-0.125em)' }} */ />
                }
                fullWidth
                size='large'
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'start'}
                    gap={'0.25em'}
                >
                    <Typography
                        fontSize={'0.8em'}
                        fontWeight={'medium'}
                        color={colors.darker__card}
                        pl={'0.1em'}
                        lineHeight={'1em'}
                    >
                        Get OTP to
                    </Typography>
                    <Typography
                        fontSize={'1.25em'}
                        fontWeight={'bold'}
                        color={colors.darker__card}
                        lineHeight={'1em'}
                    >
                        Continue
                    </Typography>
                </Box>
            </LoadingButtonBig>
        )
    }

    else {

        return (
            <React.Fragment>
                <Controller
                    control={formControl}
                    name={'email_otp'}
                    rules={{
                        required: true,
                        pattern: OTP
                    }}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <Box
                                width={'100%'}
                                className='contact__us-form_email_otp'
                            >
                                <ThemedField
                                    {...field}
                                    variant={'filled'}
                                    ref={null}
                                    name={'email_otp'}
                                    id='email_otp'
                                    label="Enter OTP*"
                                    size='small'
                                    fullWidth
                                    error={error !== undefined}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            paddingRight: '0.4em',
                                        }
                                    }}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment
                                                position="end"
                                            >
                                                <WithToolTip
                                                    color={colors.primary}
                                                    textColor={colors.darker__card}
                                                    message={"Resend OTP"}
                                                    tooltipPlacement="right"
                                                    tooltipTimeout={3000}
                                                >
                                                    <LoadingIconButton
                                                        aria-label='edit user'
                                                        onClick={() => console.log("hi")}
                                                        color={'primary'}
                                                        loadingColor={'inherit'}
                                                        isLoading={false}
                                                        sx={{
                                                            borderRadius: '50%',
                                                            backgroundColor: colors.primary
                                                        }}
                                                    >
                                                        <ResendOtpIcon />
                                                    </LoadingIconButton>
                                                </WithToolTip>
                                            </InputAdornment>,
                                    }}
                                />

                                <CollapsableError
                                    growCondition={error !== undefined}
                                    padding={'0.5em 0.05em'}
                                >
                                    {
                                        error
                                            ? error?.type === 'userError'
                                                ? error?.errorMessage
                                                : helperTextObject.email_otp[error?.type]
                                            : ''
                                    }
                                </CollapsableError>
                            </Box>
                        )
                    }}
                />
                <LoadingButtonSmall
                    className="contact__us-form_email_otp_submit-button"
                    variant='contained'
                    color='primary'
                    loading={false}
                    loadingPosition='start'
                    /* type='submit' */
                    onClick={() => setIsOtpCorrect(true)} /* {() => setIsLoading(!isLoading)} */
                    /* onKeyDown={() => setIsLoading(!isLoading)} */
                    startIcon={<VerifyEmailIcon />}
                    fullWidth
                    size='large'
                >
                    <Typography
                        fontSize={'1em'}
                        fontWeight={'bold'}
                        color={colors.darker__card}
                        lineHeight={'1em'}
                    >
                        Verify Email
                    </Typography>
                </LoadingButtonSmall>
            </React.Fragment>
        )
    };
}

export default EmailOTP