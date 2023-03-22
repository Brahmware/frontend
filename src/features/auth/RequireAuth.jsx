import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {
    selectCurrentRoles,
    selectCurrentToken,
    selectCurrentUser
} from './authSlice';

const redirectLocations = {
    unauthorized: '/unauthorized',
    login: '/brahmnauts',
};

const RequireAuth = ({ children, allowedRoles, ...rest }) => {

    const history = useHistory();
    const token = useSelector(selectCurrentToken);
    const roles = useSelector(selectCurrentRoles);
    const user = useSelector(selectCurrentUser);

    const navigateToLocation = (to) => {
        history.push(to, { from: history.location?.pathname });
    };

    return (
        <Route
            {...rest}
            render={() => {
                if (token && roles?.find(role => allowedRoles?.includes(role))) {
                    return children;
                }

                else if (user) {
                    navigateToLocation(redirectLocations.unauthorized);
                }

                else {
                    navigateToLocation(redirectLocations.login);
                }
            }}
        />
    )
}

export default RequireAuth;