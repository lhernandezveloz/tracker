import createContext from '../context/createContext';
import trackerApi from '../api/tracker';

const AuthReducer = (state, action) =>{
    switch(action.type){
        default :
            return state;
    }
};

const signup = dispatch => {

    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signup', {email, password});
            const token = response.data;
            console.log(token);
        }catch (err){
            console.log(err.message);
        }
    }
}

export const {Context, Provider} = createContext(
    AuthReducer,
    {
        signup
    },
    []
);