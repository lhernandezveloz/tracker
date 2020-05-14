import React from 'react';
import {Button, Text, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
        <Text>TrackListScreen</Text>
        <Button 
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetails')}
    />
        </>
    )   
};

const styles = StyleSheet.create({

});

export default TrackListScreen;