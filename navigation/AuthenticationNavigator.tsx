import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import FirstRegisterScreen from "../screens/Register/FirstRegisterScreen";
import SecondRegisterScreen from "../screens/Register/SecondRegisterScreen";
import VerificationScreen from "../screens/Register/VerificationScreen";
import LoginScreen from "../screens/LoginScreen";

const RegisterStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => (
	<RegisterStack.Navigator screenOptions={{ headerShown: false }}>
		<RegisterStack.Screen name="Login" component={LoginScreen} />
		<RegisterStack.Screen
			name="FirstRegisterScreen"
			component={FirstRegisterScreen}
		/>
		<RegisterStack.Screen
			name="SecondRegisterScreen"
			component={SecondRegisterScreen}
		/>
		<RegisterStack.Screen
			name="VerificationScreen"
			component={VerificationScreen}
		/>
	</RegisterStack.Navigator>
);

export default AuthStackNavigator;
