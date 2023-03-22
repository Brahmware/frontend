import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { Controller, useForm } from 'react-hook-form';
import ThemedField from '../TextFilelds/ThemedField';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CollapsableError from '../TextFilelds/CollapsableError';
import { EMAIL_PATTERN, USERNAME_PATTERN } from '../../utils/patterns';
import MultiSelectCheckBoxDropDown from '../TextFilelds/MultiSelectCheckBoxDropDown';
import { useAddNewUserMutation, useGetAllUsersMutation } from '../../features/users/usersApiSclice';
import { colors } from '../../muiTheme/theme';
import { userSchema } from '../../features/users/usersSlice';
import UploadImage from '../ImageUploadComponent/UploadImage';
import { AddUserIcon, PhotoCameraIcon } from '../../assets/icons';
import { ALT } from '../../utils/keywards';
import filemeta from '../../utils/fileMetas';

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

    roles: {
        required: "Atleast one Role is Required.",
    },

};

const AddUser = () => {

    const [addNewUser, { isLoading }] = useAddNewUserMutation();

    const {
        setValue,
        handleSubmit,
        control,
        watch,
        /* formState: { isValid, errors }, */
        setError,
    } = useForm({
        reValidateMode: 'onChange',
        defaultValues: userSchema
    });

    const [responseState, setResponseState] = useState({});
    const [getAllUsers] = useGetAllUsersMutation();

    const handleOnSubmit = async ({ ...formData }) => {

        setResponseState({});

        try {
            const userdata = await addNewUser({ ...formData }).unwrap();
            userdata && setResponseState({
                success: true,
                message: userdata?.message
            });

            await getAllUsers();
        }

        catch (err) {
            if (
                Math.floor(err?.status / 100) === 4 &&
                err?.data?.property !== ALT
            ) {
                setError(err?.data?.property, {
                    type: 'userError',
                    errorMessage: err?.data?.errorMessage
                });
            }

            else if (err?.data?.property === ALT) {
                setResponseState({
                    success: false,
                    message: err?.data?.errorMessage
                });
            }


            else {
                setResponseState({
                    success: false,
                    message: "Something went Wrong. Please Try Again!"
                });
            }
        }

    }

    const [profilePicture, setProfilePicture] = useState('');

    useEffect(() => {
        const subscription = watch((value) => {
            setResponseState({});
            const { profilePicture: proflPic } = value;
            if (proflPic) {
                setProfilePicture(proflPic);
            }

        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (

        <Card
            className='add__user'
            elevation={10}
            sx={{
                width: '100%',
                px: '2.5em',
                py: '2.5em',
                borderRadius: 0,
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
                justifySelf: 'center',
                borderBottom: `1.5em solid ${colors.primary}`,
                boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.5)'
            }}
        >
            <form
                className='add__user-form'
                onSubmit={handleSubmit(handleOnSubmit)}
                style={{ width: '100%' }}
            >
                <div className='add__user-form_layout'>
                    <Controller
                        control={control}
                        name="profilePicture"
                        defaultValue=''
                        render={({ field: { onChange }, fieldState: { error } }) => {
                            return (
                                <UploadImage
                                    elementClassName={'add_user-upload_image'}
                                    ariaLabel={'upload_user_photo'}
                                    color={colors.input_border__color}
                                    border={true}
                                    meta={filemeta.profilePicture}
                                    onChange={onChange}
                                    message={"Upload Image"}
                                    previousImage={profilePicture}
                                    shouldReplace={true}
                                >
                                    <PhotoCameraIcon
                                        height={'1.5em'}
                                        width={'1.5em'}
                                        fill={colors.text__color}
                                    />
                                </UploadImage>
                            )
                        }}
                    />
                    <Controller
                        control={control}
                        name="fullName.firstName"
                        defaultValue={''}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Box
                                    width={'100%'}
                                    className='add__user-form_first-name'
                                >
                                    <ThemedField
                                        {...field}
                                        ref={null}
                                        name={'firstName'}
                                        id='firstName'
                                        label="First Name*"
                                        size='small'
                                        fullWidth
                                        error={error !== undefined}
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
                    <Controller
                        control={control}
                        name="fullName.middleName"
                        defaultValue={''}
                        render={({ field }) => {
                            return (
                                <ThemedField
                                    {...field}
                                    className='add__user-form_middle-name'
                                    ref={null}
                                    name={'middleName'}
                                    id='middleName'
                                    label="Middle Name"
                                    size='small'
                                    fullWidth
                                />
                            )
                        }}
                    />
                    <Controller
                        control={control}
                        name="fullName.lastName"
                        defaultValue={''}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Box
                                    width={'100%'}
                                    className='add__user-form_last-name'
                                >
                                    <ThemedField
                                        {...field}
                                        ref={null}
                                        name={'lastName'}
                                        id='lastName'
                                        label="Last Name*"
                                        size='small'
                                        fullWidth
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

                    <Controller
                        control={control}
                        name="username"
                        defaultValue={''}
                        rules={{
                            required: true,
                            pattern: USERNAME_PATTERN
                        }}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Box
                                    width={'100%'}
                                    className='add__user-form_username'
                                >
                                    <ThemedField
                                        {...field}
                                        ref={null}
                                        name={'username'}
                                        label="Username*"
                                        size='small'
                                        fullWidth
                                        error={error !== undefined}
                                    />
                                    <CollapsableError growCondition={error !== undefined}>
                                        {
                                            error
                                                ? error?.type === 'userError'
                                                    ? error?.errorMessage
                                                    : helperTextObject.username[error?.type]
                                                : ''
                                        }
                                    </CollapsableError>
                                </Box>
                            )
                        }}
                    />

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
                                    className='add__user-form_email'
                                >
                                    <ThemedField
                                        {...field}
                                        ref={null}
                                        name={'email'}
                                        label="Email*"
                                        size='small'
                                        placeholder="Brahmware Email"
                                        fullWidth
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

                    <Controller
                        control={control}
                        name="roles"
                        defaultValue={''}
                        rules={{
                            required: true,
                        }}
                        render={({ fieldState: { error } }) => {
                            return (
                                <Box
                                    width={'100%'}
                                    className='add__user-form_roles'
                                >
                                    <MultiSelectCheckBoxDropDown
                                        ref={null}
                                        name={'roles'}
                                        label={'Commands*'}
                                        size={'small'}
                                        setValue={setValue}
                                        placeholder={"Positions"}
                                    />
                                    <CollapsableError
                                        growCondition={error !== undefined}
                                        transform={'translateY(0.1em)'}
                                    >
                                        {
                                            error
                                                ? error?.type === 'userError'
                                                    ? error?.errorMessage
                                                    : helperTextObject.roles[error?.type]
                                                : ''
                                        }
                                    </CollapsableError>
                                </Box>
                            )
                        }}
                    />

                    {
                        Object.keys(responseState).length > 0 &&
                        <Box
                            className='add__user-form_message'
                        >
                            <Typography
                                color={
                                    responseState.success ?
                                        colors.success
                                        :
                                        colors.danger
                                }
                            >
                                {responseState?.message}
                            </Typography>
                        </Box>

                    }


                    <LoadingButton
                        className='add__user-form_submit-button'
                        variant='contained'
                        color='success'
                        loading={isLoading}
                        loadingPosition='start'
                        type='submit'
                        startIcon={
                            <AddUserIcon
                                height={'1em'}
                                width={'1em'}
                                fill={colors.text__color}
                            />
                        }
                        fullWidth
                        size='large'
                        sx={{
                            height: '100%',
                            borderRadius: '0.33em',
                            paddingLeft: '0.6em'
                        }}
                    >
                        <Typography
                            fontSize={'1.25em'}
                            fontWeight={'medium'}
                            color={'inherit'}
                        >
                            Create
                        </Typography>
                    </LoadingButton>

                </div>
            </form>
        </Card>
    )
}

export default AddUser