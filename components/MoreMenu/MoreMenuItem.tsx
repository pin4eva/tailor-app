import { Icon } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MoreMenuItem = () => {
	return (
		<View style={styles.container}>
			<Icon
				name="smiling-face-outline"
				fill="black"
				style={{ width: 20, height: 20 }}
			/>
			<Text style={{ marginLeft: 5, fontSize: 18 }}>Customers</Text>
		</View>
	);
};

export default MoreMenuItem;
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 14,
		marginVertical: 14,
	},
});
