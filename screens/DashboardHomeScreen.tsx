import { Avatar, Button, Icon, Text } from "@ui-kitten/components";
import React from "react";
import {
	ScrollView,
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import ContainerLayout from "../components/ContainerLayout";
import QuickActionListComp from "../components/Dashboard/QuickActionComp";
import StoryListComp from "../components/Dashboard/StoryListComp";
import VideoCard from "../components/Dashboard/VideoCardComp";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/Colors";
/*eslint no-useless-escape: "error"*/
const DashboardHomeScreen = () => {
	return (
		<ContainerLayout>
			<ScrollView style={{ backgroundColor: "white" }}>
				{/* Top */}
				<View style={styles.topLayout}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Avatar
								size="small"
								source={require("../assets/images/avatar-1.png")}
							/>
							<Text style={{ marginLeft: 5, fontWeight: "700" }}>Charis</Text>
						</View>
						<Icon
							name="bell-outline"
							fill="#000"
							style={{ width: 20, height: 20 }}
						/>
					</View>
					<View style={{ alignItems: "center" }}>
						<Text
							style={{
								fontSize: 37,
								color: PRIMARY_COLOR,
								fontFamily: "poppinsExtraBold",
							}}
						>
							N13,7250
						</Text>
						<Text style={{ color: PRIMARY_COLOR, fontSize: 14 }}>
							MONTHLY PROFIT
						</Text>
					</View>
					<View style={styles.statsContainer}>
						<View style={styles.statsWrapper}>
							<View>
								<Text
									style={{
										fontWeight: "bold",
										textAlign: "center",
										fontSize: 14,
									}}
								>
									14
								</Text>
								<Text
									style={{
										textAlign: "center",
										fontSize: 11,
									}}
								>
									Tailors
								</Text>
							</View>
							<View>
								<Text
									style={{
										fontWeight: "bold",
										textAlign: "center",
										fontSize: 14,
									}}
								>
									14
								</Text>
								<Text
									style={{
										textAlign: "center",
										fontSize: 11,
									}}
								>
									Tailors
								</Text>
							</View>
							<View>
								<Text
									style={{
										fontWeight: "bold",
										textAlign: "center",
										fontSize: 14,
									}}
								>
									14
								</Text>
								<Text
									style={{
										textAlign: "center",
										fontSize: 11,
									}}
								>
									Tailors
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ paddingHorizontal: "5%" }}>
					<Text style={styles.heading}>Pending Orders</Text>
					<StoryListComp />
					<Text style={styles.heading}>Quick Actions</Text>
					<QuickActionListComp />
					<View style={styles.advert}>
						<View>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									marginBottom: 10,
									textAlign: "center",
								}}
							>
								Post a boosted shot ?
							</Text>
							<Text
								style={{ fontSize: 12, marginBottom: 10, textAlign: "center" }}
							>
								Boost your shots to get more viewers and {"user's"}
								participation
							</Text>
							<View style={{ flexDirection: "row", justifyContent: "center" }}>
								<Button
									size="small"
									style={{
										backgroundColor: PRIMARY_COLOR,
										borderColor: PRIMARY_COLOR,
									}}
								>
									Post Shots
								</Button>
							</View>
						</View>
					</View>
					<Text style={styles.heading}>Fashion Videos</Text>
					<VideoCard />
					<View
						style={{
							...styles.advert,
							backgroundColor: "#EE4E34",
							marginTop: 30,
						}}
					>
						<View>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									marginBottom: 10,
									textAlign: "center",
									color: "white",
								}}
							>
								Post a boosted shot ?
							</Text>
							<Text
								style={{
									fontSize: 12,
									marginBottom: 10,
									textAlign: "center",
									color: "white",
								}}
							>
								Boost your shots to get more viewers and {"user's"}{" "}
								participation
							</Text>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									// color: "white",
								}}
							>
								<TouchableOpacity style={styles.btnOutlinePrimary}>
									<Text
										style={{
											color: PRIMARY_COLOR,
											fontFamily: "poppinsMedium",
											fontSize: 13,
										}}
									>
										Post Shots
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</ContainerLayout>
	);
};

export default DashboardHomeScreen;

const styles = StyleSheet.create({
	topLayout: {
		backgroundColor: SECONDARY_COLOR,
		// paddingTop: "3%",
		paddingHorizontal: "5%",
		height: Dimensions.get("window").height / 2.2,
		justifyContent: "space-around",
	},
	statsContainer: {
		alignItems: "center",
	},
	statsWrapper: {
		backgroundColor: "#fff",
		flexDirection: "row",
		width: "70%",
		justifyContent: "space-around",
		borderRadius: 39,
		padding: "3%",
	},
	heading: {
		fontSize: 13,
		textTransform: "uppercase",
		marginVertical: 25,
		fontFamily: "poppinsBold",
	},
	advert: {
		backgroundColor: "#fef3f1",
		height: 168,
		justifyContent: "center",
		paddingHorizontal: 38,
		borderRadius: 11,
	},
	btnOutlinePrimary: {
		backgroundColor: "white",
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderRadius: 5,
	},
	// advertWrapper: {},
});
