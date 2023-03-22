import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { colors } from '../../muiTheme/theme';
import { useUpdateUserMutation } from '../../features/users/usersApiSclice';
import { SwitchComponent } from '../SwitchComponent/SwitchComponent';
import WithToolTip from '../TooltipComponent/WithTooltip';


const BlockUser = ({ params }) => {
    const { username, disabled } = params.row;
    const currentUser = useSelector(selectCurrentUser);

    const [updateUser] = useUpdateUserMutation();

    const [checked, setChecked] = useState(disabled);

    const handleSwitchChange = async (event) => {
        const checked = event.target.checked;
        try {
            await updateUser({ username, ...params.row, disabled: checked }).unwrap();
            setChecked(checked);
        } catch (_error) {
            setChecked(disabled);
        }
    }

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            zIndex={1}
        >
            <WithToolTip
                color={!checked ? colors.success : colors.danger}
                message={
                    username === currentUser ? '' :
                        !checked ?
                            `Block ${username}` :
                            `Unblock ${username}`
                }
                showChangeState={true}
            >
                <SwitchComponent
                    size='small'
                    aria-label={`Block ${username}`}
                    disabled={username === currentUser}
                    checked={checked}
                    color='default'
                    onColor={colors.danger}
                    offColor={colors.success}
                    onChange={handleSwitchChange}
                />
            </WithToolTip>
        </Box>
    )
}

export default BlockUser