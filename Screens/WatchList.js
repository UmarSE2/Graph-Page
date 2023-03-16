// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import Entypo from 'react-native-vector-icons/Entypo';
// import DonutChart from '../Components/DonutChart'
// import DataCard from '../Components/DataCard'
// import MainData from '../Components/MainData';

// function ncard(val, index) {
//     return (
//         <DataCard
//             key={index}
//             title={val.title}
//             value={val.value}
//             price={val.price}
//             percentage={val.percentage}
//             increment={val.increment}
//         />
//     );
// }

// const WatchList = () => {
//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <DonutChart />
//             <View style={{ paddingHorizontal: 15 }}>
//                 {MainData.map(ncard)}
//             </View>
//             <View style={styles.footer}>
//                 <View style={{ marginLeft: "5%" }}>
//                     <Text style={styles.text1}>Get Full Version</Text>
//                     <Text style={styles.text2}>13 days left in your free trial</Text>
//                 </View>
//                 <Entypo name="chevron-right" size={37} style={styles.icon} />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     footer: {
//         width: "100%",
//         height: "13%",
//         backgroundColor: "#c8c5bf",
//         position: 'absolute',
//         bottom: 0,
//         flexDirection: "row",
//         alignItems: "center"
//     },
//     text1: {
//         color: "black",
//         fontSize: 17,
//         fontWeight: "bold"
//     },
//     text2: {
//         color: "black",
//         marginTop: "2%",
//         fontSize: 13,
//     },

// })

// export default WatchList;
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import DonutChart from '../Components/DonutChart';
import DataCard from '../Components/DataCard';
import MainData from '../Components/MainData';

function ncard(val, index) {
    return (
        <DataCard
            key={index}
            title={val.title}
            value={val.value}
            price={val.price}
            percentage={val.percentage}
            increment={val.increment}
        />
    );
}

const WatchList = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <DonutChart />
            <View style={{ paddingHorizontal: 15 }}>
                {MainData.map(ncard)}
            </View>
            <View style={styles.footer}>
                <View style={{ marginLeft: '5%' }}>
                    <Text style={styles.text1}>Get Full Version</Text>
                    <Text style={styles.text2}>13 days left in your free trial</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <Entypo name="chevron-right" size={37} style={styles.icon} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: '11%',
        backgroundColor: '#c8c5bf',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text1: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
    },
    text2: {
        color: 'black',
        marginTop: '2%',
        fontSize: 13,
    },
});

export default WatchList;
