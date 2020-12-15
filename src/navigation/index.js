import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import CameraScreen from '../screen/CameraScreen';
import CamearOutputScreen from '../screen/CameraOutputScreen';

const index = () => {
    return (
        <Stack.Navigator initialRouteName="OTP">   
            <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CameraOutput" component={CamearOutputScreen} options={{
                headerTitle:""
            }}/>
        </Stack.Navigator>
    );
}

export default index;

