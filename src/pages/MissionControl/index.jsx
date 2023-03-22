import Box from '@mui/material/Box';
import { Switch as Router, Route } from 'react-router-dom';
import MissionControlDrawer from '../../components/MissionControl/MissionControlDrawer/index';
import { drawerItems, editContents } from '../../features/managableContents/drawerItems';
import Account from './Account';


const MissionControl = () => {


    return (
        <Box sx={{ display: 'flex' }}>
            <MissionControlDrawer />

            <Box component="main" sx={{ flexGrow: 1, paddingLeft: '4.5em' }}>
                {/* <DrawerHeader /> */}
                <Router>
                    {
                        [...drawerItems, ...editContents].map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact={item.name === 'Home' && true}
                                    path={`${process.env.PUBLIC_URL + "/mission-control" + item.path}`}
                                    component={item.component}
                                />
                            )
                        })
                    }
                    <Route
                        path={`${process.env.PUBLIC_URL + "/mission-control/account"}`}
                        component={Account}
                    />
                </Router>
            </Box>
        </Box>
    );
}

export default MissionControl;