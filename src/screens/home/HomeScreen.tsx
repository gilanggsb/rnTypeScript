import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { Component } from 'react'
import {
    Button,
    Pressable,
    Text,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Constant from '../../constants/constant';
import { initialData } from '../../redux/reducer';
import { storeState } from '../../redux/store';
import { RootStackParamList } from '../../routes/RootNavigation';
type HomeScreenProps = {
};


const HomeScreen: React.FC<HomeScreenProps> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Counter Screen' onPress={() => navigation.navigate("CounterScreen")} />
        </View>
    )
}

export default HomeScreen;