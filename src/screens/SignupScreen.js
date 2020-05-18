import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {

    const {state, signup, cleanErrorMessage, locanSignin} = useContext(AuthContext);

    useEffect(() => {
        locanSignin();
    }, []);

    return ( 
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={cleanErrorMessage}
            />
            <AuthForm 
                title="Sign Up for Tracker"
                btnTitle="Sign up"
                errorMessage={state.errorMessage}
                onSubmmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign In instead."
            />
        </View>
    );
};

SignupScreen.navigationOptions = {
    headerShown: false
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;