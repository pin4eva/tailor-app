import { Button, Input, Text } from "@ui-kitten/components";
import React from "react";
import { Pressable, View } from "react-native";
import ContainerLayout from "../../components/ContainerLayout";
import { PRIMARY_COLOR } from "../../constants/Colors";
import { RegisterStackScreenProps } from "../../types";
import { authStyles as styles } from "./styles.register";

const SecondRegisterScreen = ({
	navigation,
}: RegisterStackScreenProps<"SecondRegisterScreen">) => {
	return (
		<ContainerLayout>
			<ContainerLayout>
				<View style={styles.container}>
					<Text style={styles.largeText}>Register</Text>
					<Text style={styles.smallText}>
						Lets connect you with your customers
					</Text>

					<Input
						placeholder="Name"
						style={{ ...styles.input, marginTop: 33 }}
					/>
					<Input
						placeholder="Phone Number"
						keyboardType="number-pad"
						style={{ ...styles.input }}
					/>
					<Input placeholder="Password" secureTextEntry style={styles.input} />
					<Input
						placeholder="Confirm Password"
						secureTextEntry
						style={styles.input}
					/>
					<Button
						onPress={() => navigation.navigate("VerificationScreen")}
						style={{ borderRadius: 11, marginBottom: 14 }}
					>
						Register
					</Button>
					<Button
						style={{
							borderRadius: 11,
							marginBottom: 14,
							backgroundColor: "transparent",
						}}
						appearance="outline"
					>
						Register with Google
					</Button>
					<View style={{ flexDirection: "row", justifyContent: "center" }}>
						<Text style={{ ...styles.smallText, textAlign: "center" }}>
							Already have an account?
						</Text>
						<Pressable
							style={{ padding: 0, marginLeft: 3 }}
							onPress={() => navigation.navigate("FirstRegisterScreen")}
						>
							<Text
								category="s1"
								style={{ ...styles.smallText, color: PRIMARY_COLOR }}
							>
								Login
							</Text>
						</Pressable>
					</View>
				</View>
			</ContainerLayout>
		</ContainerLayout>
	);
};

export default SecondRegisterScreen;
