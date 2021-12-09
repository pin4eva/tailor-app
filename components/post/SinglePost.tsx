import { Avatar, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextHeaderMedium, TextRegular } from "../../libs/TextComp";

const SinglePost = () => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.topLeft}>
					<Avatar source={require("../../assets/images/avatar-3.png")} />
					<TextHeaderMedium style={{ marginLeft: 5, fontWeight: "700" }}>
						Charis
					</TextHeaderMedium>
				</View>
				<Icon
					name="chevron-down"
					fill="black"
					style={{ width: 20, height: 20 }}
				/>
			</View>
			<TextRegular style={{ marginVertical: 14 }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
				delectus?
			</TextRegular>
			<Image
				style={styles.image}
				source={require("../../assets/images/fashion-1.png")}
			/>
		</View>
	);
};

export default SinglePost;

const styles = StyleSheet.create({
	container: {
		marginVertical: 14,
	},
	top: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	topLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: 225,
	},
});
