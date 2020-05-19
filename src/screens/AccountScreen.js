import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import {Text, Button} from 'react-native-elements';
import Spacer from '../components/spacer';
import {StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/authContext';


const AccountScreen = () => {

    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={styles.text}>Account</Text>
            <Spacer>
                <Button 
                    onPress={signout}
                    title="Sign Out"
                    style={styles.btn}
                />
            </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize:48

    }
});

export default AccountScreen;