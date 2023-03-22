import axios from 'axios';
//import {accessTokenExpiery} from './handleTokenRefresh';

const API = axios.create(
    {
        withCredentials: false,
        baseURL: process.env.REACT_APP_BACKEND_URL
    }
);

// Get Access Token from the store if available

const config = {
    headers: {
        "Accept": 'application/json',
        "Content-type": "application/json"
    }

};

export const registerContact = async (body) => API.post(`/api/contact/register`, body, config);