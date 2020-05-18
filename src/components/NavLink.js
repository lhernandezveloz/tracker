import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) =>{
    return (
        <TouchableOpacity onPress={() => {navigation.navigate(routeName)}}>
            <Spacer>
                <Text style={styles.linkText}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linkText: {
        fontSize: 17,
        color: 'blue'
    }

});

export default withNavigation(NavLink);
