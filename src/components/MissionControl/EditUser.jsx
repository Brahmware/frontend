import { Box, Card, CardMedia, Paper, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../features/users/usersSlice';
import { useEventListener } from '../../hooks/useEventListener';
import { colors, transition } from '../../muiTheme/theme';
import EditUserHeader from '../editUserHeader/EditUserHeader';
import UploadImage from '../ImageUploadComponent/UploadImage';
import { PhotoCamera } from '@mui/icons-material';
import ThemedField from '../TextFilelds/ThemedField';
import CollapsableError from '../TextFilelds/CollapsableError';
import { EMAIL_PATTERN } from '../../utils/patterns';
import MultiSelectCheckBoxDropDown from '../TextFilelds/MultiSelectCheckBoxDropDown';
import { LoadingButton } from '@mui/lab';
import { PhotoCameraIcon, UpdateUserIcon } from '../../assets/icons';
import ModalContent from '../ModalComponent/Modal';
import { useGetAllUsersMutation, useUpdateUserMutation } from '../../features/users/usersApiSclice';
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


const EditUser = ({
    elevation,
    open,
    handleClose: handleModalClose
}) => {

    const userSelected = useSelector(selectedUser);

    const {
        setValue,
        handleSubmit,
        control,
        watch,
        /* formState: { isValid, errors }, */
        setError,
    } = useForm({
        reValidateMode: 'onChange',
        defaultValues: userSelected
    });


    const escKeyPressHandler = useCallback((key) => key.keyCode === 27 && handleModalClose(), [handleModalClose]);
    useEventListener("keydown", escKeyPressHandler);

    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const [getAllUsers] = useGetAllUsersMutation();
    const [responseState, setResponseState] = useState({});

    const handleOnSubmit = async ({ ...formdata }) => {

        setResponseState({});

        try {

            const userdata = await updateUser({ username: userSelected.username, ...formdata }).unwrap();
            userdata && setResponseState({
                success: true,
                message: userdata?.message
            });
            await getAllUsers();

        } catch (err) {

            console.log(err)

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
    };

    const [profilePicture, setProfilePicture] = useState(userSelected?.profilePicture || '');
    useEffect(() => {
        const subscription = watch((value) => {
            setResponseState({});
            const { profilePicture: proflPic } = value;
            if (proflPic) {
                setProfilePicture(proflPic);
            }
        });

        return () => subscription.unsubscribe();
    }, [watch])

    return (
        <ModalContent inCondition={open}>
            <Paper
                elevation={elevation}
                sx={{
                    borderRadius: '1em',
                    overflow: 'hidden',
                    backgroundColor: colors.dark__card
                }}
            >
                <EditUserHeader handleClose={handleModalClose} />
                <form
                    className='edit__user-form'
                    onSubmit={handleSubmit(handleOnSubmit)}
                    style={{
                        width: '100%',
                        padding: '2.125em',
                    }}
                >
                    <div className='edit__user-form_layout'>
                        <Controller
                            control={control}
                            name="profilePicture"
                            defaultValue=''
                            render={({ field: { onChange }, fieldState: { error } }) => {
                                return (
                                    <UploadImage
                                        elementClassName={'edit_user-upload_image'}
                                        ariaLabel={'upload_user_photo'}
                                        color={colors.muted}
                                        border={true}
                                        meta={filemeta.profilePicture}
                                        onChange={onChange}
                                        message={'Upload Image'}
                                        previousImage={profilePicture}
                                    >
                                        <PhotoCameraIcon height={'1.5em'} width={'1.5em'} fill={colors.text__color} />
                                    </UploadImage>
                                )
                            }}
                        />
                        {/* 
                        <UploadImage
                            elementClassName={'edit_user-upload_image'}
                            ariaLabel={'upload_user_photo'}
                            color={colors.muted}
                            message={'Upload Image'}
                            meta={filemeta.profilePicture}

                        >
                            <PhotoCamera sx={{ height: '2em', width: '2em' }} />
                        </UploadImage> */}
                        {/* {
                            !userSelected?.profilePicture ?
                                <UploadImage
                                    elementClassName={'edit_user-upload_image'}
                                    ariaLabel={'upload_user_photo'}
                                    color={colors.muted}
                                    message={'Upload Image'}
                                >
                                    <PhotoCamera sx={{ height: '2em', width: '2em' }} />
                                </UploadImage>

                                :

                                <Card
                                    elevation={3}
                                    className='edit_user-upload_image'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        "& img, & .upload_image": {
                                            transition: transition(),
                                        },

                                        "&:hover": {
                                            "& img": {
                                                filter: 'brightness(30%)',
                                            },

                                            "& .upload_image": {
                                                opacity: 1,
                                            }
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        loading='lazy'
                                        image={userSelected?.profilePicture}
                                        alt={`profile picture of ${userSelected.username}`}
                                    />

                                    <div style={{ position: 'absolute' }}>
                                        <UploadImage
                                            elementClassName={'upload_image'}
                                            ariaLabel={'upload_user_photo'}
                                            color={colors.muted}
                                            border={false}
                                            opacity={0.3}
                                        >
                                            <PhotoCameraIcon height={'1.5em'} width={'1.5em'} fill={colors.text__color} />
                                        </UploadImage>
                                    </div>
                                </Card>
                        } */}

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
                                        className='edit__user-form_first-name'
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
                                        className='edit__user-form_middle-name'
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
                                        className='edit__user-form_last-name'
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
                                        className='edit__user-form_email'
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
                                        className='edit__user-form_roles'
                                    >
                                        <MultiSelectCheckBoxDropDown
                                            ref={null}
                                            name={'roles'}
                                            label={'Commands*'}
                                            size={'small'}
                                            setValue={setValue}
                                            prevSelected={userSelected.roles}
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
                                className='edit__user-form_message'
                            >
                                <Typography
                                    color={responseState.success ? colors.success : colors.danger}
                                >
                                    {responseState?.message}
                                </Typography>
                            </Box>

                        }

                        <LoadingButton
                            className='edit__user-form_submit-button'
                            variant='contained'
                            color='success'
                            loading={isLoading}
                            loadingPosition='start'
                            type='submit'
                            startIcon={<UpdateUserIcon height={'1em'} width={'1em'} fill={colors.text__color} />}
                            fullWidth
                            size='large'
                            sx={{
                                height: '100%',
                                borderRadius: '0.33em',
                                paddingLeft: '0.6em'
                            }}
                        >
                            <Typography fontSize={'1.25em'} fontWeight={'medium'} color={'inherit'}>Update</Typography>
                        </LoadingButton>

                    </div>
                </form>
            </Paper>
        </ModalContent>
    )
}

export default EditUser;