import { Box, Chip } from '@mui/material';
import React from 'react';
import { getRoleName } from "../../utils/rolesList";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';

const UserRoles = ({ params }) => {
    const { username, roles } = params.row;
    const userRoles = roles?.map((code) =>
        Number(code)
    ).sort().reverse();

    const currentUser = useSelector(selectCurrentUser);

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            alignItems={'center'}
            gap="0.5em"
        >
            {
                userRoles.map((roleCode, index) =>
                    getRoleName(roleCode) !== -1 &&
                    <Chip
                        key={index}
                        label={getRoleName(roleCode)}
                        color={username === currentUser ? 'success' : 'default'}
                    />
                )
            }
        </Box>
    )
}

export default UserRoles