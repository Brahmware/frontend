import React, { useState } from 'react'
import { Box, IconButton, Typography, Zoom, Modal } from '@mui/material';
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton';
import { colors, speed } from '../../muiTheme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteUserMutation, useGetAllUsersMutation } from '../../features/users/usersApiSclice';
import { setEditable } from '../../features/users/usersSlice';
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    CheckCircle as ConfirmIcon,
    Cancel as CancelIcon
} from '@mui/icons-material';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { TooltipComponent } from '../TooltipComponent/TooltipComponent';
import EditUser from './EditUser';
import WithToolTip from '../TooltipComponent/WithTooltip';


const UserActions = ({ params }) => {

    const { username } = params.row;

    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    const [getAllUsers] = useGetAllUsersMutation();

    const dispatch = useDispatch();

    const initialState = { show: false, target: null };
    const [
        deleteConfirmationDialogue,
        setDeleteConfirmationDialogue
    ] = useState(initialState);

    const showDeleteConfirmationDialogue
        = (username) => setDeleteConfirmationDialogue({ show: true, target: username });

    const onConfirmDeleteUser = async (username) => {

        try {
            if (username) {
                await deleteUser(username);
            };
            await getAllUsers();
            setDeleteConfirmationDialogue(initialState);

        } catch (error) {
            console.log(error);
        }
    };

    const onCancelDeleteUser
        = () => setDeleteConfirmationDialogue(initialState);

    const [showModal, setShowModal] = useState(false);

    const onEditButtonClick = (username) => {
        dispatch(setEditable({ username }));
        setShowModal(true);
    };

    const handleModalClose = () => setShowModal(false);

    const currentUser = useSelector(selectCurrentUser);

    return (

        <Box
            width={'100%'}
            height={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={"center"}
            position={'relative'}
        >
            <Zoom
                in={deleteConfirmationDialogue.show}
                style={{ position: 'absolute', transitionDuration: speed.medium }}
            >
                <Box
                    height={'100%'}
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'1em'}
                >
                    <Typography color="error" fontWeight={'medium'}>Are you sure?</Typography>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'0.5em'}
                    >

                        <TooltipComponent title="Cancel" color={colors.success}>
                            <IconButton
                                aria-label='cancel delete user operation'
                                disabled={username === currentUser}
                                color='success'
                                onClick={() => onCancelDeleteUser()}
                            >
                                <CancelIcon />
                            </IconButton>
                        </TooltipComponent>

                        <LoadingIconButton
                            aria-label='confirmation delete user operation'
                            disabled={username === currentUser}
                            color='error'
                            onClick={() => onConfirmDeleteUser(username)}
                            isLoading={
                                deleteConfirmationDialogue.target === username &&
                                isDeleting
                            }
                        >
                            <TooltipComponent title="Confirm" color={colors.danger}>
                                <ConfirmIcon />
                            </TooltipComponent>
                        </LoadingIconButton>

                    </Box>
                </Box>
            </Zoom>

            <Zoom
                in={!deleteConfirmationDialogue.show}
                style={{ position: 'absolute', transitionDuration: speed.medium }}
            >
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'0.5em'}
                >
                    <WithToolTip
                        color={colors.warning}
                        message={username !== currentUser && `Edit ${username}`}
                    >
                        <LoadingIconButton
                            aria-label='edit user'
                            disabled={username === currentUser}
                            onClick={() => onEditButtonClick(username)}
                            color='warning'
                            loadingColor={'warning'}
                            isLoading={showModal}
                        >
                            <EditIcon />
                        </LoadingIconButton>
                    </WithToolTip>

                    <WithToolTip
                        color={colors.danger}
                        message={username !== currentUser && `Delete ${username}`}
                    >
                        <IconButton
                            aria-label='delete user'
                            disabled={username === currentUser}
                            color='error'
                            onClick={() => showDeleteConfirmationDialogue(username)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </WithToolTip>

                </Box>
            </Zoom>
            <Modal
                open={showModal}
                onClose={handleModalClose}
                aria-labelledby="edit-user-window"
                aria-describedby={`editting-${username}'s-profile`}
            >
                <EditUser
                    elevation={2}
                    open={showModal}
                    handleClose={handleModalClose}
                />
            </Modal>
        </Box>

    )
}

export default UserActions