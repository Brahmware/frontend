import { useState, useEffect } from 'react';

export const usePath = () => {
    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    useEffect(() => {
        window.addEventListener("click", listenToPopstate);
        return () => {
            window.removeEventListener("click", listenToPopstate);
        };
    }, []);
    return path;
};