import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/NavLink';

const SinginScreen = ({ navigation }) => {

    const {state, signin, cleanErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={cleanErrorMessage}
            />
            <AuthForm
                title="Sign In for Tracker"
                btnTitle="Sign In"
                errorMessage={state.errorMessage}
                onSubmmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Go back to Sign Up"
            /> 
        </View>
    );
};

SinginScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SinginScreen;