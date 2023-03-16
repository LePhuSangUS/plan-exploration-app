
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { navigationRef } from "./RootNavigation";
import StackNavigation from './StackNavigation';



const AppNavigationContainer = () => {
    return <NavigationContainer ref={navigationRef}>
        <StackNavigation />
    </NavigationContainer>
}

export default AppNavigationContainer;
