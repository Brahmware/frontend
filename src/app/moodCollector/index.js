import React from 'react'
import { Route } from 'react-router-dom'

const redirectLocations = {
    unauthorized: '/unauthorized',
    login: '/brahmnauts',
};

export const RequireAuth = ({ children, allowedRoles, ...rest }) => {

    return (
        <Route
        /* {...rest}
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
        }} */
        />
    )
};