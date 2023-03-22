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
            >
                {/* Full Name */}
                <Typography
                    component={'h3'}
                    fontSize={'1.75em'}
                    fontWeight={'medium'}
                    gap={'1em'}
                >
                    {fullName?.firstName || ''} {fullName?.middleName || ''} {fullName?.lastName || ''}
                </Typography>

                {/* Username */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    gap={'0.8em'}
                    alignItems={'center'}
                >
                    {
                        username === currentUser ?
                            <YouIcon
                                height={'1.33em'}
                                width={'1.5em'}
                                fill={colors.success}
                            />
                            :
                            <BrahmNautIcon
                                height={'1.5em'}
                                width={'1.5em'}
                                fill={colors.primary}
                            />
                    }
                    <Typography
                        component={'h5'}
                        fontSize={'1.25em'}
                        color={username === currentUser ? colors.success : 'primary'}
                        fontWeight={username === currentUser && 'medium'}
                    >
                        {username}
                    </Typography>

                </Box>

                {/* Email */}
                <Box
                    display={'flex'}
                    gap={'0.9em'}
                    alignItems={'center'}
                >
                    <ContactsIcon sx={{ height: '0.82em', width: '0.82em' }} />
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
                                return (<AdminSmiley className='commands-smiley' height={'4em'} width={'4em'} />);

                            case currentUserRoles.includes(rolesList.Handler):
                                return (<HandlerSmiley className='commands-smiley' height={'4em'} width={'4em'} />);

                            case currentUserRoles.includes(rolesList.Blogger):
                                return (<BloggerSmiley className='commands-smiley' height={'4em'} width={'4em'} />);

                            default:
                                return (<BloggerSmiley className='commands-smiley' height={'4em'} width={'4em'} />);
                        }
                    })()}
                </Box>
            }
        </Box>
    )
}

export default User