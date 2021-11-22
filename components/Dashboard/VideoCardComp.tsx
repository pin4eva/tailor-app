import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
// import VideImage from "../../../assets/images/Ankara_classy_gown_ankara_wedding_dress_african_wedding_dre@4x.png";

const VideoCard = () => {
	const dataArray = [
		require("../../assets/images/fashion-1.png"),
		require("../../assets/images/fashion-2.png"),
		require("../../assets/images/fashion-3.png"),
	];
	return (
		<FlatList
			horizontal={true}
			data={dataArray}
			showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item}
			renderItem={({ item }) => (
				<View>
					<ImageBackground style={styles.image} source={item}>
						<Icon
							style={{ width: 50, height: 50 }}
							fill="#fff"
							name="play-circle"
						/>
					</ImageBackground>
					<Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
						Adding embroidery to Ankara cloth
					</Text>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={{ fontSize: 10 }}>By Sarah Whyte</Text>
						<Text style={{ fontSize: 10, color: "#EE4E34" }}>2 mins</Text>
					</View>
				</View>
			)}
			ItemSeparatorComponent={() => <View style={{ marginHorizontal: 14 }} />}
		/>
	);
};

export default VideoCard;

const styles = StyleSheet.create({
	image: {
		width: 270,
		height: 180,
		alignItems: "center",
		justifyContent: "center",
	},
});
