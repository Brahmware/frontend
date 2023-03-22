import { Box, Button, Card, Collapse, Typography } from '@mui/material';
import AddUser from '../../components/MissionControl/AddUser';
import AllUserTable from '../../components/MissionControl/AllUserTable';
import { useState } from 'react';
import { colors, transition } from '../../muiTheme/theme';
import {
    PersonAddAlt1 as AddUserIcon,
    CloseFullscreen as MinimizeIcon
} from '@mui/icons-material';

const Users = () => {

    const [dialogueOpen, setDialogueOpen] = useState(false);

    return (
        <Box
            sx={{
                width: 'calc(100% - 4.5em)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'fixed',
                left: '4.5em',
                top: 0
            }}
        >
            <Card
                style={{
                    width: '100%',
                    maxHeight: '100%',
                    borderRadius: 0,
                    overflow: 'hidden'
                }}
            >
                <Box
                    className={"mission__control-header"}
                    sx={{
                        backgroundColor: colors.primary,
                        padding: '1em 1em 1em 3em',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '5em',
                    }}
                >
                    <Typography
                        variant='h4'
                        component={'h4'}
                        color={colors.dark__card}
                        fontWeight={'bold'}
                    >
                        Brahmnauts
                    </Typography>

                    <Button
                        variant='contained'
                        color={'buttonOnPrimary'}
                        startIcon={
                            dialogueOpen ?
                                <MinimizeIcon /> :
                                <AddUserIcon />
                        }
                        sx={{
                            px: '1.5em',
                            height: '3em',
                            width: !dialogueOpen ? '8em' : '3em',
                            overflow: 'hidden',
                            transition: transition('fast'),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1em',

                            padding: dialogueOpen && '0 !important',
                            minWidth: 'unset',
                            borderRadius: dialogueOpen ? '50% !important' : '0.5em !important',

                            "& .MuiButton-startIcon": {
                                padding: '0 !important',
                                margin: '0 !important',
                            }
                        }}
                        onClick={() => setDialogueOpen(!dialogueOpen)}
                    >
                        {!dialogueOpen && 'Create'}
                    </Button>
                </Box>
                <Box
                    position={'absolute'}
                    width={'100%'}
                    zIndex={2}
                >
                    <Collapse
                        className={'collapsable__add_user'}
                        in={dialogueOpen}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <AddUser />
                    </Collapse>
                </Box>
                <AllUserTable />
            </Card>
        </Box>
    );
};

export default Users;