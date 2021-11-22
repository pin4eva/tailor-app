import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 33,

		height: "100%",
		justifyContent: "center",
	},
	largeText: {
		fontFamily: "poppinsSemiBold",
		fontSize: 34,
	},
	smallText: {
		fontSize: 14,
	},
	input: {
		backgroundColor: "rgba(235, 235, 235, 0.32)",
		marginBottom: 14,
	},
	radioWrapper: {
		// boderColor: "rgba(235, 235, 235, 0.32)",
		marginBottom: 14,
		borderWidth: 1,
		borderColor: "rgba(235, 235, 235, 0.75)",
		flexDirection: "row",
		alignItems: "center",
		padding: 14,
		borderRadius: 5,
	},
	radioText: {
		color: "#9f99a3",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 6,
	},
	verifyContainer: {
		flexDirection: "row",

		justifyContent: "space-between",
		marginTop: 40,
	},
});
