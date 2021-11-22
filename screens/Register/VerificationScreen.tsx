import { Button, Input } from "@ui-kitten/components";
import React from "react";
import { Text, View } from "react-native";
import { RootStackScreenProps } from "../../types";
import { authStyles as styles } from "./styles.register";

const VerificationScreen = ({ navigation }: RootStackScreenProps<"Root">) => {
	return (
		<View style={styles.container}>
			<Text style={styles.largeText}>Verification</Text>
			<Text style={styles.smallText}>
				Add the 5 digits sent to your contact
			</Text>

			<View style={styles.verifyContainer}>
				<Input
					style={{ ...styles.input, backgroundColor: "inherit" }}
					keyboardType="numeric"
					maxLength={1}
				/>
				<Input
					style={{ ...styles.input, backgroundColor: "inherit" }}
					keyboardType="numeric"
					maxLength={1}
				/>
				<Input
					style={{ ...styles.input, backgroundColor: "inherit" }}
					keyboardType="numeric"
					maxLength={1}
				/>
				<Input
					style={{ ...styles.input, backgroundColor: "inherit" }}
					keyboardType="numeric"
					maxLength={1}
				/>
				<Input
					style={{ ...styles.input, backgroundColor: "inherit" }}
					keyboardType="numeric"
					maxLength={1}
				/>
			</View>
			<Button
				style={{ marginTop: 20 }}
				size="large"
				onPress={() => navigation.navigate("Root")}
			>
				Verify Account
			</Button>
		</View>
	);
};

export default VerificationScreen;
