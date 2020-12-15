//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { View, StatusBar, Dimensions, TouchableOpacity, Text,Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import DocumentPicker from 'react-native-document-picker';

import styles from './styles';

import Iconicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let { height, width } = Dimensions.get('window');
// create a component
const CameraScreen = (props) => {
    const camera = useRef(null);
    const [orientation, setOrientation] = useState();
    const [flashMode,setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
    useEffect(() => {
        Dimensions.addEventListener('change', handleOrientationChange);
        return () => {
            Dimensions.removeEventListener('change', handleOrientationChange);
        }
    }, [])
    const handleOrientationChange = dimensions => {
        ({ height, width } = dimensions.window);
        let orientation = height > width ? 'Portrait' : 'Landscape';
        setOrientation({ orientation });
    };

    const takePicture = async () => {
        const options = { quality: 0.5, base64: false };
        const data = await camera.current.takePictureAsync(options);
        props.navigation.navigate('CameraOutput',{data});
    }

    const handleGallery = async() => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            console.log('res : ' + JSON.stringify(res));
            props.navigation.navigate('CameraOutput',{data:res});
        } catch (err) {
            console.log(err);    
        }
    }
    const handleFlash = () => {
        console.log(flashMode);
        if(flashMode === RNCamera.Constants.FlashMode.off) {
            setFlashMode(RNCamera.Constants.FlashMode.torch)
        } else {
            setFlashMode(RNCamera.Constants.FlashMode.off)
        }
    }
    const dlImage = "https://image.freepik.com/free-vector/car-driver-license-identification-card-with-photo_169241-1290.jpg"
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={"#000"} />
            <RNCamera flashMode={flashMode} ref={camera} style={styles.container}>
                <View style={styles.arrowContainerStyle}>
                    <Iconicons name="arrow-back-outline" style={styles.backArrow}/>
                </View>
                <View style={styles.textContainerLandscape}>
                    <View>
                        <Text style={styles.stepStyle}>Step 2 of 3</Text>
                        <Text style={styles.dlFront}>Scan DL front</Text>
                    </View>
                    <View>
                        <Image source={{uri:dlImage}} resizeMode="contain" style={styles.dlImage}/>
                    </View>
                </View>
                <View style={orientation === 'Portrait' ? styles.buttonContainerPortrait : styles.buttonContainerLandscape}>
                    <TouchableOpacity onPress={handleGallery} style={orientation === 'Portrait' ? (styles.buttonPortrait) : (styles.buttonLandscape)}>
                        <MaterialIcon name="photo-library" style={styles.libraryIcon}/>
                        <Text style={styles.galleryText}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePicture} style={orientation === 'Portrait' ? (styles.buttonPortrait) : (styles.buttonLandscape)}>
                        <Iconicons name="radio-button-on-outline" style={styles.captureIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFlash} style={orientation === 'Portrait' ? (styles.buttonPortrait) : (styles.buttonLandscape)}>
                        <MaterialIcon name={flashMode===0 ? "flash-off" : "flash-on"} style={styles.flashIcon}/>
                    </TouchableOpacity>
                </View>
            </RNCamera>
        </View>
    );
};

//make this component available to the app
export default CameraScreen;
