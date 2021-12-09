import { Avatar } from "@ui-kitten/components";
import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import ContainerLayout from "../components/ContainerLayout";
import MoreMenuItem from "../components/MoreMenu/MoreMenuItem";
import { PRIMARY_COLOR } from "../constants/Colors";
import { TextHeaderLarge } from "../libs/TextComp";

const MoreScreen = () => {
	return (
		<ContainerLayout>
			<View style={styles.container}>
				<View style={styles.top}>
					<Avatar
						size="giant"
						source={require("../assets/images/avatar-3.png")}
					/>
					<TextHeaderLarge style={{ fontSize: 18, marginTop: 14 }}>
						Charis Braide
					</TextHeaderLarge>
					<TouchableOpacity style={styles.touchableButton}>
						<Text style={{ color: PRIMARY_COLOR }}>View Profile</Text>
					</TouchableOpacity>
				</View>

				<ScrollView style={{ marginTop: 14 }}>
					<MoreMenuItem />
					<MoreMenuItem />
					<MoreMenuItem />
					<MoreMenuItem />
					<MoreMenuItem />
				</ScrollView>
			</View>
		</ContainerLayout>
	);
};

export default MoreScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	top: {
		alignItems: "center",
		paddingTop: 15,
	},
	touchableButton: {
		backgroundColor: "#FCF0EE",
		padding: 14,
		borderRadius: 20,
	},
});
