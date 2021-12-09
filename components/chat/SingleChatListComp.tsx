import { Avatar } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextHeaderMedium } from "../../libs/TextComp";

const SingleChatListComp = () => {
	return (
		<View>
			<View style={styles.container}>
				<Avatar source={require("../../assets/images/avatar-2.png")} />
				<View style={{ paddingHorizontal: 5 }}>
					<View
						style={{
							flexDirection: "row",

							justifyContent: "space-between",
							// flexShrink: 1,
							marginRight: 10,
						}}
					>
						<TextHeaderMedium>Jane Flaming</TextHeaderMedium>
						<TextHeaderMedium style={{ flexShrink: 1 }}>Wed</TextHeaderMedium>
					</View>
					<Text style={{ fontSize: 14, flexShrink: 1 }}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta
						cupiditate neque eos molestiae quod.
					</Text>
				</View>
			</View>
		</View>
	);
};

export default SingleChatListComp;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",

		marginBottom: 23,
		// flexWrap: "wrap",
		// alignItems: "center",
	},
});
