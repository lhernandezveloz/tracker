import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'; 
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>TrackCreateScreen</Text> 
            <Map />
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;