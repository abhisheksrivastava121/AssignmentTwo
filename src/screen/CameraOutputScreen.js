//import liraries
import React, { useState } from 'react';
import { View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
// create a component
const CamearOutputScreen = (props) => {
    const uri = props.route.params.data.uri;
    const handleRetake = () => {
        props.navigation.navigate('CameraScreen');
    }
    return (
        <View style={styles.outputScreencontainer}>
            <Text style={styles.step2Of3Style}>Step 2 of 3</Text>
            <Text style={styles.dlFront}>Review DL front</Text>
            <Text style={styles.summaryText}>Before proceeding make sure that data on this image is not blured and entirely visible to you. Click 'retake' if you want to upload the image again.</Text>
            <Image source={{uri:uri}} style={styles.imageStyle}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleRetake} style={styles.retakeContainer}>
                    <Text style={styles.retakeText}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextContainer}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


//make this component available to the app
export default CamearOutputScreen;
