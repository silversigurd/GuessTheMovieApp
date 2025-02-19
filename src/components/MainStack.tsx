import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { GameScreen } from "./GameScreen";
import { MainMenu } from "./MainMenu";
import { NivelSelect } from "./NivelSelect";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="MainMenu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#003092",
                },
                headerTintColor: "white",
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="MainMenu"
                component={MainMenu}
                options={{
                    title: ""
                }}
            />
            <StackNavigator.Screen
                name="Game"
                component={GameScreen}
                options={{
                    title: "Adivina la peli"
                }}
            />
            <StackNavigator.Screen
                name="NivelSelect"
                component={NivelSelect}
                options={{
                    title: "Seleccione un nivel"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);