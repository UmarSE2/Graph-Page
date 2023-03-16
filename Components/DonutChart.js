import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const GraphData = [
    {
        key: 1,
        value: 50,
        svg: { fill: '#72706b' },
    },
    {
        key: 2,
        value: 30,
        svg: { fill: '#c8c4bf' },
    },
    {
        key: 3,
        value: 20,
        svg: { fill: '#2e2f2e' },
    },
];

const DonutChart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Total value</Text>
                <Text style={styles.value1}>100,000
                    <Text style={styles.value2}> (+31%)</Text>
                </Text>
                <Text style={styles.price}>34.00 (+3%)</Text>
                <View style={styles.row}>
                    <Text style={styles.exchangeText}>Exchange</Text>
                    <View style={[styles.blackBox, { backgroundColor: "black" }]} />
                    <TouchableOpacity style={[styles.blackBox, { marginLeft: "3%" }]}>
                        <Text style={{ textAlign: "center" }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <PieChart
                style={{ flex: 1 }}
                data={GraphData}
                outerRadius="50%"
                innerRadius="70%"
                padAngle={0}
                animate
                animationDuration={500}
                startAngle={-Math.PI * 1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "24%",
        flexDirection: 'row',
        backgroundColor: "#eeedeb",
    },
    innerContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: "10%"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 8,
    },
    value1: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
        marginRight: 8,
    },
    value2: {
        fontSize: 14,
        paddingLeft: 10,
        color: 'grey',
    },
    price: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    exchangeText: {
        fontSize: 13,
        color: '#000',
        marginRight: 8,
    },
    icon: {
        width: 22,
        height: 22,
        borderRadius: 5,
        backgroundColor: '#c8c4bf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blackBox: {
        height: 22,
        width: 22,
        borderRadius: 5,
        borderRadiusColor: "#c8c4bf",
        borderWidth: 1,
    },
});

export default DonutChart;
