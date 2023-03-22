import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import usePersist from '../../hooks/usePersist';
import { useSelector } from 'react-redux';
import {
    selectCurrentToken,
} from './authSlice';
import { useRefreshMutation } from './authApiSlice';
import LoadingPage from '../../pages/loading';

const redirectLocations = {
    unauthorized: '/unauthorized',
    login: '/brahmnauts',
};

const PersistLogin = ({ children, ...others }) => {

    const history = useHistory();
    const [persist] = usePersist();
    const token = useSelector(selectCurrentToken);
    const [trueSuccess, setTrueSuccess] = useState(false);

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        /* error */
    }] = useRefreshMutation();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            console.log('verifynig refresh token')
            try {
                await refresh();
                setTrueSuccess(true);
            } catch (error) {
                console.error(error);
            }
        }

        if (!token && persist) verifyRefreshToken();

        // eslint-disable-next-line
    }, []);

    const navigateToLocation = (to) => {
        history.push(to, { from: history.location?.pathname });
    };

    return (
        <Route
            {...others}
            render={() => {

                if (isLoading) {
                    return <LoadingPage />
                }

                else if (isError) {
                    navigateToLocation(redirectLocations.login);
                }

                else if (!persist || (isSuccess && trueSuccess) || (token && isUninitialized)) {
                    return children;
                }
            }}
        />
    );
};

export default PersistLogin;