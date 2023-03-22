import React, { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { registerContact } from "../../api";
import disableScroll from 'disable-scroll';
import Modal from "../modal";
import ThemedField from "../TextFilelds/ThemedField";
import { Box } from "@mui/system";
import CollapsableError from "../TextFilelds/CollapsableError";
import { EMAIL_PATTERN } from "../../utils/patterns";
import EmailOTP from "./EmailOTP";
import { LoadingButtonSmall } from "../LoadingButtonWithIcon";
import { colors } from "../../muiTheme/theme";
import { Typography } from "@mui/material";
import { SendQueryIcon } from "../../assets/icons";
import { contactSchema } from "../../features/contact/contactSlice";


const helperTextObject = {
    firstName: {
        required: "First Name is Required",
    },

    lastName: {
        required: "Last Name is Required",
    },

    username: {
        required: "Username is Required",
        pattern: "Min 4 and max 30 charecters, no spaces. ( _  -  .  @ are allowed )"
    },

    email: {
        required: "Email is Required.",
        pattern: "Invalid Email Address."
    },

    email_otp: {
        required: "Email OTP is Required.",
        pattern: "Wrong OTP"
    },

    subject: {
        required: "Subject is required",
    },

    message: {
        required: "Message is required",
    },

};

const ContactForm = () => {

    let [disableButton, setDisableButton] = useState(true);
    let [showModal, setShowModal] = useState(false);
    let [modalContent, setModalContent] = useState(null);
    let [isError, setIsError] = useState(false);

    const {
        reset,
        control,
        register,
        handleSubmit,
        errors
    } = useForm({
        mode: "onChange",
        defaultValues: contactSchema
    });

    const onSubmitHandler = async (data) => {
        setDisableButton(true);
        await registerContact(data)
            .then((res) => {

                if (res.data && res.data.success) {

                    setIsError(false);
                    setModalContent(res.data.message);
                    setShowModal(true);
                    setDisableButton(false);
                    reset({ data });

                } else if (!res.data.success) {

                    setIsError(true);
                    setModalContent(res.data.error);
                    setShowModal(true);

                }
            })
            .catch((err) => {

                setIsError(true);
                setShowModal(true);
                setModalContent(err.message);

            })

    };

    useEffect(() => {
        showModal ? disableScroll.on() : disableScroll.off();
    }, [showModal])

    const onChange = (value) => {
        setDisableButton(false);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    const [isOtpCorrect, setIsOtpCorrect] = useState(false);

    return (
        <form className="contact__us-form">
            {
                /* 
                Form Fields
                * Name: { firstName, middleName, LastName } 
                * Email
                * Phone Number
                * Organization
                * Subject
                * Message
                */
            }

            {/* Name: {firstName} */}
            <Controller
                control={control}
                name="name"
                rules={{
                    required: true,
                }}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_first-name'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                ref={null}
                                name={'fullName.firstName'}
                                id='firstName'
                                label="First Name*"
                                size={'small'}
                                fullWidth
                                error={error !== undefined}
                                disabled={isOtpCorrect}
                            />
                            <CollapsableError growCondition={error !== undefined}>
                                {
                                    error
                                        ? error?.type === 'userError'
                                            ? error?.errorMessage
                                            : helperTextObject.firstName[error?.type]
                                        : ''
                                }
                            </CollapsableError>
                        </Box>
                    )
                }}
            />

            {/* Name: {middleName} */}
            <Controller
                control={control}
                name="fullName.middleName"
                render={({ field }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_middle-name'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                ref={null}
                                name={'fullName.middleName'}
                                id='middleName'
                                label="Middle Name"
                                size={'small'}
                                disabled={isOtpCorrect}
                                fullWidth
                            />
                        </Box>
                    )
                }}
            />

            {/* Name: {lastName} */}
            <Controller
                control={control}
                name="fullName.lastName"
                rules={{
                    required: true,
                }}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_last-name'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                ref={null}
                                name={'lastName'}
                                id='lastName'
                                label="Last Name*"
                                size={'small'}
                                fullWidth
                                disabled={isOtpCorrect}
                                error={error !== undefined}
                            />
                            <CollapsableError growCondition={error !== undefined}>
                                {
                                    error
                                        ? error?.type === 'userError'
                                            ? error?.errorMessage
                                            : helperTextObject.lastName[error?.type]
                                        : ''
                                }
                            </CollapsableError>
                        </Box>

                    )
                }}
            />

            {/* Email */}
            <Controller
                control={control}
                name="email"
                defaultValue={''}
                rules={{
                    required: true,
                    pattern: EMAIL_PATTERN
                }}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_email'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                ref={null}
                                name={'email'}
                                label="Email*"
                                size={'small'}
                                placeholder="Org. email is prefered."
                                fullWidth
                                disabled={isOtpCorrect}
                                error={error !== undefined}
                            />

                            <CollapsableError growCondition={error !== undefined}>
                                {
                                    error
                                        ? error?.type === 'userError'
                                            ? error?.errorMessage
                                            : helperTextObject.email[error?.type]
                                        : ''
                                }
                            </CollapsableError>
                        </Box>
                    )
                }}
            />

            {/* emailOTP */}

            <EmailOTP
                isOtpCorrect={isOtpCorrect}
                setIsOtpCorrect={setIsOtpCorrect}
                formControl={control}
                handleFormSubmit={handleSubmit}
            />

            {/* Organization */}
            <Controller
                control={control}
                name="organization"
                render={({ field }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_organization'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                disabled={!isOtpCorrect}
                                ref={null}
                                name={'organisation'}
                                id='organization'
                                label="Organization"
                                placeholder="Your organization."
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    )
                }}
            />

            {/* Subject */}
            <Controller
                control={control}
                name="subject"
                rules={{
                    required: true,
                }}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_subject'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                disabled={!isOtpCorrect}
                                ref={null}
                                name={'subject'}
                                id='subject'
                                label="Subject*"
                                size={'small'}
                                fullWidth
                                placeholder="What is this query about?"
                                error={error !== undefined}
                            />
                            <CollapsableError growCondition={error !== undefined}>
                                {
                                    error
                                        ? error?.type === 'userError'
                                            ? error?.errorMessage
                                            : helperTextObject.subject[error?.type]
                                        : ''
                                }
                            </CollapsableError>
                        </Box>
                    )
                }}
            />

            {/* Message */}
            <Controller
                control={control}
                name="message"
                rules={{
                    required: true,
                }}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Box
                            width={'100%'}
                            className='contact__us-form_message'
                        >
                            <ThemedField
                                {...field}
                                variant={'filled'}
                                disabled={!isOtpCorrect}
                                ref={null}
                                name={'message'}
                                id='message'
                                label="Message*"
                                size={'small'}
                                fullWidth
                                multiline
                                minRows={5}
                                maxRows={10}
                                placeholder="Write your query in details."
                                error={error !== undefined}
                            />
                            <CollapsableError growCondition={error !== undefined}>
                                {
                                    error
                                        ? error?.type === 'userError'
                                            ? error?.errorMessage
                                            : helperTextObject.message[error?.type]
                                        : ''
                                }
                            </CollapsableError>
                        </Box>
                    )
                }}
            />

            <LoadingButtonSmall
                className="contact__us-form_submit-button"
                variant='contained'
                disabled={!isOtpCorrect}
                color='primary'
                loading={false}
                loadingPosition='end'
                /* type='submit' */
                endIcon={<SendQueryIcon />}
                fullWidth
                size='large'
            >
                <Typography
                    fontSize={'1em'}
                    fontWeight={'bold'}
                    color={colors.darker__card}
                    lineHeight={'1em'}
                >
                    Send Query
                </Typography>
            </LoadingButtonSmall>
        </form>
    )
};

export default ContactForm;
