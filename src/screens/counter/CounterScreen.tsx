import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Constant from "../../constants/constant";
import { initialData } from "../../redux/reducer";
import { storeState } from "../../redux/store";

type CounterProps = {

}

const CounterScreen: React.FC<CounterProps> = () => {
    const counter = useSelector((state: typeof initialData) => state.counter);

    const increment = () => {
        storeState.dispatch({ type: Constant.ACTION_INCREMENT })
    }

    const decrement = () => {
        storeState.dispatch({ type: Constant.ACTION_DECREMENT })
    }


    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <Pressable >
                        <Text style={{ color: 'black' }} >-</Text>
                    </Pressable>
                    <Text style={{ color: 'black', marginHorizontal: 10 }} >X</Text>
                    <Pressable >
                        <Text style={{ color: 'black' }} >+</Text>
                    </Pressable>
                </View>
            </View>

    )
}

export default CounterScreen