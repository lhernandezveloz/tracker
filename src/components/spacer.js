import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = ({children}) => {
    return (
        <View style={styles.marginStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    marginStyle: {
        margin: 15
    }
});

export default Spacer;