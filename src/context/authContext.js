import {AsyncStorage} from 'react-native';
import createContext from '../context/createContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const AuthReducer = (state, action) =>{
    switch(action.type){
        case 'signin':
            return {token: action.payload, errorMessage: ''};
        case 'signout':
                return {token: null, errorMessage: ''};
        case 'add-error':
            return {...state, errorMessage: action.payload};
        case 'clean-error':
            return {...state, errorMessage: '' };
        default :
            return state;
    }
};

const cleanErrorMessage = dispatch => () => {
    dispatch({type: 'clean-error'});
};

const locanSignin = dispatch => async () =>{
    
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    }else{
        navigate('Signup');
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'});
    navigate('loginFlow');
};

const signup = dispatch => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'singin', payload: response.token})
        navigate('TrackList');
    }catch (err){
        dispatch({type: 'add-error', payload: 'Something went wrong with sign up'})
    }
};

const signin = dispatch => async ({email, password}) => {

    try{
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    }catch (err){
        dispatch({type: 'add-error', payload: 'Something went wrong with sign in'});
    }
}


export const {Context, Provider} = createContext(
    AuthReducer,
    {
        signin,
        signup,
        cleanErrorMessage,
        locanSignin,
        signout
    },
    {token: null, errorMessage: ''}
);