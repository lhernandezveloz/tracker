import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/authContext';

const InitialScreen = () => {
    const { locanSignin } = useContext(AuthContext);

    useEffect(() => {
        locanSignin();
    }, []);

    return null;
}

export default InitialScreen;