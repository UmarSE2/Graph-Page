import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={{ flexDirection: "column", }}>
                <Text style={{ marginTop: 7 }}>{props.value}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                    <Text style={styles.price}>{props.price}</Text>
                    <Text style={{ fontWeight: "bold" }}> {props.percentage}</Text>
                </View>
                <Text style={styles.increment}>{props.increment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "17.5%",
        borderWidth: 4,
        borderColor: "#eeedeb",
        paddingHorizontal: 15,
        marginVertical: 7,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: "black",
        fontWeight: "bold",
        paddingTop: 10,
    },
    price: {
        fontWeight: "900",
        color: "black",
        fontSize: 18
    },
    increment: {
        fontWeight: "bold",
        color: "black"
    }
})

export default DataCard;