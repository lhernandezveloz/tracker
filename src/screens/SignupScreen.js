import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext} from '../context/authContext';

const SignupScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <View style={styles.container}>
            <Spacer>
                <Text style={styles.titleStyle}>Sign Up for Tracker</Text>
            </Spacer>
                <Input 
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Spacer/>
                <Input 
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Spacer>
                <Button 
                title="Sign Up"
                onPress={() => signup({email, password})}
                />
                </Spacer>
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
    },
    titleStyle:{
        fontSize: 28
    }
});

export default SignupScreen;