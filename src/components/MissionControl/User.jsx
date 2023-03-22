import React from 'react';
import { Box, Typography } from '@mui/material';
import { Contacts as ContactsIcon } from '@mui/icons-material';
import { AdminSmiley, BloggerSmiley, BrahmNautIcon, HandlerSmiley, YouIcon } from '../../assets/icons';
import { colors } from '../../muiTheme/theme';
import { useSelector } from 'react-redux';
import { selectCurrentRoles, selectCurrentUser } from '../../features/auth/authSlice';
import { rolesList } from '../../utils/rolesList';

const User = ({ params }) => {

    const { fullName, email, username } = params.row;

    const currentUser = useSelector(selectCurrentUser);
    const currentUserRoles = useSelector(selectCurrentRoles);

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'3em'}
            className={'noselect'}
            padding={'0 3em'}
        >

            <Box
                flexGrow={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                gap={'0.25em'}
            >
                {/* Full Name */}
                <Typography
                    component={'h3'}
                    fontSize={'2em'}
                    fontWeight={'medium'}
                    gap={'1em'}
                >
                    {fullName?.firstName || ''} {fullName?.middleName || ''} {fullName?.lastName || ''}
                </Typography>

                {/* Username */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    gap={'1em'}
                    alignItems={'center'}
                >
                    {
                        username === currentUser ?
                            <YouIcon
                                height={'2em'}
                                width={'2em'}
                                fill={colors.success}
                            />
                            :
                            <BrahmNautIcon
                                height={'2em'}
                                width={'2em'}
                                fill={colors.primary}
                            />
                    }
                    <Typography
                        component={'h5'}
                        variant='h5'
                        color={username === currentUser ? colors.success : 'primary'}
                        fontWeight={username === currentUser && 'medium'}
                    >
                        {username}
                    </Typography>

                </Box>

                {/* Email */}
                <Box
                    display={'flex'}
                    gap={'1.1em'}
                    alignItems={'center'}
                >
                    <ContactsIcon sx={{ height: '1.125em', width: '1.125em' }} />
                    <Typography padding={'0.5em 0'}>{email}</Typography>
                </Box>
            </Box>
            {
                username === currentUser &&
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    alignSelf={'center'}
                    gap={'0.5em'}
                    ml={'auto'}
                >
                    {(() => {
                        switch (true) {
                            case currentUserRoles.includes(rolesList.Admin):
                                return (<AdminSmiley className='commands-smiley' height={'5em'} width={'5em'} />);

                            case currentUserRoles.includes(rolesList.Handler):
                                return (<HandlerSmiley className='commands-smiley' height={'5em'} width={'5em'} />);

                            case currentUserRoles.includes(rolesList.Blogger):
                                return (<BloggerSmiley className='commands-smiley' height={'5em'} width={'5em'} />);

                            default:
                                return (<BloggerSmiley className='commands-smiley' height={'5em'} width={'5em'} />);
                        }
                    })()}
                </Box>
            }
        </Box>
    )
}

export default User