import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Home, PlanDetail ,Box} from '../screens';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS, icons } from '../consts';
const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.green,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarIcon: ({ focused, color, size }) => {
                    const defineIcons = {
                        List: 'flash',
                        Box: 'cube',
                        Camera: 'camera',
                        Search: "search",
                        Favorite: "heart",
                    };
                    switch (route.name) {
                        case 'List':
                        case 'Box':
                        case 'Favorite':
                        case 'Search':
                            return <Image style={[styles.icon, {
                                tintColor: color,

                            }]} source={icons?.[defineIcons[route.name]]} />
                        case 'Camera':
                            return <View
                                style={styles.camera}
                            >
                                <Image style={[styles.icon, {
                                    tintColor: COLORS.white,

                                }]} source={icons?.[defineIcons[route.name]]} />
                            </View>

                    }
                    return null
                },
                title: ({ focused, color, size }) => {
                    return null
                },
                //   tabBarStyle: { position: 'absolute' ,top:"50%"},

            })}

            initialRouteName='List'>
            <Tab.Screen name="List" component={Home} />
            <Tab.Screen name="Box" component={Box} />
            <Tab.Screen name="Camera" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Favorite" component={Home} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

    icon: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    camera: {
        backgroundColor: COLORS.green,
        // padding: 15,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    }
}
)