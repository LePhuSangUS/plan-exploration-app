import { View, Text, StyleSheet ,StatusBar} from 'react-native'
import React, { useCallback} from 'react'
import { COLORS } from '../../consts'
import { useFocusEffect } from '@react-navigation/native';

export default function Box() {
    useFocusEffect(
        React.useCallback(() => {
           StatusBar.setBarStyle('dark-content', true);
            return () => {
           StatusBar.setBarStyle('light-content', true);
               
           }
       },[])
   )
    return (
        <View style={styles.container}>
            {/* New Plan  */}
            <View style={styles.newPlanSection}></View>
            {/* Today's Share  */}
            <View style={styles.todayShareSection}></View>
            {/* Add Friend */}
            <View style={styles.addFriendSection}></View>

        </View>
    )
}



const styles = StyleSheet.create({

    container: {
     flex:1
    },
    newPlanSection: {
        height: "30%",
        backgroundColor: COLORS.white,
         borderBottomLeftRadius:50,
         borderBottomRightRadius:50,
    },
    todayShareSection: {
        height:"50%"
    },
    addFriendSection: {
        height:"20%"
    }

}
)