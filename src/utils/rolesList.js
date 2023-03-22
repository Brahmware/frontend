import {
    ManageAccounts as AdminIcon,
    BorderColor as EditorIcon,
    Person as UserIcon,

} from '@mui/icons-material';

export const rolesList = {
    "Admin": 5150,
    "Handler": 2001,
    "Blogger": 1010
};

export const getRolesIcon = ({ roleCode, iconsize }) => {

    switch (Number(roleCode)) {
        case 5150:
            return <AdminIcon
                fontSize={iconsize}
            />

        case 2001:
            return <EditorIcon
                fontSize={`calc(0.8 * ${iconsize})`}
            />

        default:
            return <UserIcon
                fontSize={iconsize}
            />
    }
}

export function getRoleName(roleCode) {
    return Object.keys(rolesList)[Object.values(rolesList).indexOf(Number(roleCode))]
}