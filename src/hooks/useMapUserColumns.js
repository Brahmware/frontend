import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import UserRoles from "../components/MissionControl/UserRoles";
import {
    Face4 as Face4Icon,
} from '@mui/icons-material';
import User from "../components/MissionControl/User";
import { BrahmNautIcon } from "../assets/icons";
import { colors } from "../muiTheme/theme";
import UserActions from "../components/MissionControl/UserActions";
import { selectCurrentUser } from "../features/auth/authSlice";
import BlockUser from "../components/MissionControl/BlockUser";

const useMapUserColumns = () => {
    const currentUser = useSelector(selectCurrentUser);

    const columns = useMemo(() => {

        return (
            [
                {
                    headerAlign: 'center',
                    headerName: (
                        <Face4Icon
                            sx={{
                                height: '1.5em',
                                width: "1.5em",
                                fill: `${colors.text__color}`,
                            }}
                        />
                    ),
                    sortable: false,
                    width: '160',
                    renderCell: (params) => {
                        return (
                            <Box
                                width={'100%'}
                                height={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                position={'relative'}
                            >

                                <Avatar
                                    alt={params.row?.username}
                                    src={params.row?.profilePicture}
                                    sx={{
                                        height: '6em',
                                        width: '6em',
                                        Margin: '0 2em',
                                        border: params.row?.username === currentUser ?
                                            `0.2em solid ${colors.success}`
                                            : 'none'
                                        ,
                                    }}
                                />
                            </Box>
                        )
                    }
                },

                {
                    field: 'username',
                    headerAlign: 'start',
                    headerName: (
                        <Box
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'center'}
                            sx={{ px: '2em' }}
                        >
                            <BrahmNautIcon
                                height={'2em'}
                                width={'2em'}
                                fill={colors.text__color}
                            />
                            <Typography
                                component={'h6'}
                                variant="h6"
                                fontWeight={'medium'}
                                pl={'1.5em'}
                            >
                                Brahmnaut
                            </Typography>
                        </Box>
                    ),
                    headerClassName: 'username__header',
                    minWidth: 600,
                    flex: 1,
                    renderCell: (params) => <User params={params} />
                },

                {
                    field: 'Roles',
                    headerAlign: 'center',
                    headerName: (
                        <Typography
                            component={'h6'}
                            variant="h6"
                            fontWeight={'medium'}
                        >
                            Commands
                        </Typography>
                    ),
                    sortable: false,
                    width: '300',
                    renderCell: (params) => <UserRoles params={params} />
                },

                {
                    field: 'blocked',
                    width: 150,
                    headerName: (
                        <Typography
                            component={'h6'}
                            variant="h6"
                            fontWeight={'medium'}
                        >
                            Blocking
                        </Typography>
                    ),
                    headerAlign: 'center',
                    sortable: false,
                    headerClassName: 'table__header',
                    renderCell: (params) => <BlockUser params={params} />
                },

                {
                    field: 'actions',
                    width: 200,
                    headerName: (
                        <Typography
                            component={'h6'}
                            variant="h6"
                            fontWeight={'medium'}
                        >
                            Actions
                        </Typography>
                    ),
                    headerAlign: 'center',
                    sortable: false,
                    hidable: true,
                    headerClassName: 'table__header',
                    renderCell: (params) => <UserActions params={params} />
                },

            ]
        )
    },
        [currentUser]
    );

    return [columns]
};

export default useMapUserColumns;