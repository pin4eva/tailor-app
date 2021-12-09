import { Icon } from "@ui-kitten/components";
import React from "react";
import {
	FlatList,
	ImageBackground,
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styled from "styled-components/native";
import ContainerLayout from "../components/ContainerLayout";
import { PRIMARY_COLOR } from "../constants/Colors";
import {
	TextHeaderLarge,
	TextHeaderMedium,
	TextRegular,
} from "../libs/TextComp";

const SearchScreen = () => {
	return (
		<ContainerLayout>
			<ScrollView style={styles.container}>
				<TextHeaderLarge style={{ fontSize: 34, lineHeight: 38 }}>
					Search
				</TextHeaderLarge>
				<TextRegular style={{ lineHeight: 15 }}>
					Easily search for anything
				</TextRegular>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginVertical: 25,
					}}
				>
					<InputStyled placeholder="Tailors, Styles or Categories" />
					<TouchableOpacity style={styles.presible}>
						<Icon
							name="options-2-outline"
							fill="black"
							style={{ width: 24, height: 24 }}
						/>
					</TouchableOpacity>
				</View>

				<FlatList
					horizontal={true}
					data={categories}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<View style={{ marginHorizontal: 10 }}>
							<View
								style={{
									backgroundColor: "#ee4e3414",
									borderRadius: 26,
									paddingHorizontal: 18,
									paddingVertical: 16,
									width: "100%",
								}}
							>
								<TouchableOpacity>
									<TextRegular
										style={{ fontSize: 16, color: PRIMARY_COLOR, padding: 2 }}
									>
										{item}
									</TextRegular>
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>

				<View style={{ marginTop: 30 }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[0].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[0].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[1].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[1].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 14,
						}}
					>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[0].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[1].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[1].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[0].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 14,
						}}
					>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[0].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[2].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
						<View style={styles.imageWrapper}>
							<ImageBackground style={styles.image} source={images[1].image}>
								<View style={styles.imageWrapper}>
									<TextHeaderMedium style={styles.imageText}>
										{images[3].text}
									</TextHeaderMedium>
								</View>
							</ImageBackground>
						</View>
					</View>
				</View>
			</ScrollView>
		</ContainerLayout>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	presible: {
		backgroundColor: "#ee4e3414",
		paddingVertical: 17,
		paddingHorizontal: 16,
		borderRadius: 5,
	},
	imageWrapper: {
		borderRadius: 20,
		backgroundColor: "rgba(238, 78, 52,0.23)",
		width: 152,
		height: 162,
		zIndex: 2,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 11,
	},
	imageText: {
		marginBottom: 30,
		color: "white",
	},
});

const InputStyled = styled(TextInput)`
	width: 80%;
	border-radius: 5px;
	background-color: #ee4e3414;
	padding: 16px;
	/* font-size: 1px; */
`;

const categories = ["Men", "Women", "Children", "Teen"];
const images = [
	{
		key: 1,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-1.png"),
	},
	{
		key: 2,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-2.png"),
	},
	{
		key: 3,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-3.png"),
	},
	{
		key: 4,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-1.png"),
	},
	{
		key: 5,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-2.png"),
	},
	{
		key: 6,
		text: "Men's Traditional",
		image: require("../assets/images/fashion-3.png"),
	},
];
