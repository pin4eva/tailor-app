/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@ui-kitten/components";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatScreen from "../screens/ChatScreen";
import DashboardHomeScreen from "../screens/DashboardHomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import MoreScreen from "../screens/MoreScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import PostScreen from "../screens/PostScreen";
import FirstRegisterScreen from "../screens/Register/FirstRegisterScreen";
import SecondRegisterScreen from "../screens/Register/SecondRegisterScreen";
import VerificationScreen from "../screens/Register/VerificationScreen";
import SearchScreen from "../screens/SearchScreen";
import {
	RegisterStackParamList,
	RootStackParamList,
	RootTabParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<React.Fragment>
			<NavigationContainer
				linking={LinkingConfiguration}
				theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
			>
				<RootNavigator />
			</NavigationContainer>
		</React.Fragment>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false, title: "Login" }}
			/>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Screen
				name="Register"
				options={{ headerShown: false }}
				component={RegisterStackNavigator}
			/>

			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();
const RegisterStackNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
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
	</Stack.Navigator>
);

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={DashboardHomeScreen}
				options={() => ({
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Icon style={{ width: 30, height: 30 }} fill={color} name="home" />
					),
				})}
			/>
			<BottomTab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: ({ color }) => (
						<Icon
							style={{ width: 30, height: 30 }}
							fill={color}
							name="search"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Post"
				component={PostScreen}
				options={{
					headerShown: false,
					title: "Post",
					tabBarIcon: ({ color }) => (
						<Icon
							style={{ width: 30, height: 30 }}
							fill={color}
							name="book-open"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Chat"
				component={ChatScreen}
				options={{
					headerShown: false,
					title: "Chat",
					tabBarIcon: ({ color }) => (
						<Icon
							style={{ width: 30, height: 30 }}
							fill={color}
							name="message-square-outline"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="More"
				component={MoreScreen}
				options={{
					headerShown: false,
					title: "Chat",
					tabBarIcon: ({ color }) => (
						<Icon
							style={{ width: 30, height: 30 }}
							fill={color}
							name="grid-outline"
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
