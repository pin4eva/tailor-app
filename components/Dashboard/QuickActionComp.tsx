import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const QuickActionListComp = () => {
	return (
		<React.Fragment>
			<ContainerStyle>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Icon
						name="person-add"
						style={{ width: 14, height: 14 }}
						fill="#06f"
					/>
					<Text style={{ marginLeft: 14 }}>Add new customer</Text>
				</View>
				<Icon
					name="chevron-right"
					style={{ width: 14, height: 14 }}
					fill="black"
				/>
			</ContainerStyle>
			<ContainerStyle>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Icon
						name="person-add"
						style={{ width: 14, height: 14 }}
						fill="#06f"
					/>
					<Text style={{ marginLeft: 14 }}>Add new customer</Text>
				</View>
				<Icon
					name="chevron-right"
					style={{ width: 14, height: 14 }}
					fill="black"
				/>
			</ContainerStyle>
		</React.Fragment>
	);
};

export default QuickActionListComp;

// const styles = StyleSheet.create({
// 	container: {
// 		paddingHorizontal: "10%",
// 		flexDirection: "row",
// 		alignItems: "center",
// 		justifyContent: "space-between",
// 	},
// });

const ContainerStyle = styled.View`
	border: 1px solid rgba(151, 149, 149, 0.158);
	padding: 18px 28px;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 14px;
`;
