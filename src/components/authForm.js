import React, {useState}from 'react';
import {Text, Input, Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from './spacer'

const AuthForm = ({title, btnTitle, onSubmmit, errorMessage}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Spacer>
            <Text style={styles.titleStyle}>{title}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
            <Button 
            title={btnTitle}
            onPress={() => onSubmmit({email, password})}
            />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage : {
        color: 'red',
        fontSize:16,
        marginLeft: 15
    },
    titleStyle:{
        fontSize: 28
    },
});

export default AuthForm;