import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return  <MapView style={styles.mapStyles} />;
};

const styles = StyleSheet.create({
    mapStyles: {
        height: 300
    }
});

export default Map;