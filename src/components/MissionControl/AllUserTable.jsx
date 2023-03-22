import React, { useEffect } from 'react';
import { Card, Tooltip } from '@mui/material';
import DataGrid from '../DataGridComponent/DataGrid';
import { useGetAllUsersMutation } from '../../features/users/usersApiSclice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../features/users/usersSlice';
import useMapUserColumns from '../../hooks/useMapUserColumns';
import { colors } from '../../muiTheme/theme';


const AllUserTable = () => {

    const [getAllUsers, { isLoading }] = useGetAllUsersMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers);
    },
        [
            dispatch,
            getAllUsers
        ]
    );

    const users = useSelector(selectAllUsers);

    const [columns] = useMapUserColumns(users);

    const headerHeight = document.getElementsByClassName('MuiDataGrid-columnHeaders')[0]?.clientHeight;


    return (

        <Card
            elevation={0}
            sx={{
                borderRadius: '0',
                overflow: 'hidden',
                px: '1em',
                backgroundColor: colors.dark__card,
                paddingBottom: '1.5em'
            }}
        >
            <DataGrid
                loading={isLoading}
                columns={columns}
                rows={users}
                disableSelectionOnClick
                disableColum
                headerHeight={'60'}
                rowHeight={140}
                getRowId={(row) => row._id}
                headerColor={colors.dark__card}
                sx={{
                    height: `calc(100vh - ${headerHeight}px - 1.5em)`,
                    transition: 'all 600ms ease 0s',
                    border: 0,
                    outline: 0,
                    backgroundColor: colors.darker__card,
                    borderRadius: 0,
                    boxShadow: 'inset 0px 0px 5px 3px rgba(0,0,0,0.5)',


                }}
            />
        </Card>
    )
}

export default AllUserTable;
