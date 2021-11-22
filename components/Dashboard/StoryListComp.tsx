import { Avatar } from "@ui-kitten/components";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const StoryListComp = () => {
	const dataArray = [
		{ image: require("../../assets/images/avatar-1.png"), key: 1 },
		{ image: require("../../assets/images/avatar-2.png"), key: 2 },
		{ image: require("../../assets/images/avatar-3.png"), key: 3 },
		{ image: require("../../assets/images/avatar-4.png"), key: 4 },
		{ image: require("../../assets/images/avatar-5.png"), key: 5 },
		{ image: require("../../assets/images/avatar-6.png"), key: 6 },
		{ image: require("../../assets/images/avatar-7.png"), key: 7 },
	];
	return (
		<View>
			<FlatList
				horizontal={true}
				data={dataArray}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={styles.image}>
						<Avatar size="large" source={item.image} />
					</View>
				)}
			/>
		</View>
	);
};

export default StoryListComp;

const styles = StyleSheet.create({
	image: {
		padding: 10,
	},
});
