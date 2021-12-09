import React from "react";
import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	useColorScheme,
} from "react-native";

const ContainerLayout = ({ children }: { children: React.ReactChild }) => {
	const colorScheme = useColorScheme();
	return (
		<View
			style={{
				...styles.container,
				backgroundColor: colorScheme === "dark" ? "black" : "light",
			}}
		>
			{children}
		</View>
	);
};

export default ContainerLayout;

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
		flexShrink: 1,
	},
});
