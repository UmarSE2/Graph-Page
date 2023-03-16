import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LeftIcon = () => {
    return (
        <Pressable style={styles.iconCircle}>
            <AntDesign name="leftcircle" size={25} color="#eeedeb" backgroundColor="#72706b" style={{ borderRadius: 20, marginLeft: 10, }} />
        </Pressable>
    )
}

export const RightIcon = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="bell" size={20} color="black" />
            <View style={styles.circle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: "#c8c5bf",
        marginLeft: 17
    },
})

