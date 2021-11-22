import { Button, Input, Text } from "@ui-kitten/components";
import React from "react";
import { Pressable, View } from "react-native";
import ContainerLayout from "../components/ContainerLayout";
import { PRIMARY_COLOR } from "../constants/Colors";
import { RootStackScreenProps } from "../types";
import { authStyles as styles } from "./Register/styles.register";

const LoginScreen = ({
	navigation,
}: RootStackScreenProps<"Root">): JSX.Element => {
	return (
		<ContainerLayout>
			<View style={styles.container}>
				<Text style={styles.largeText}>Login</Text>
				<Text style={styles.smallText}>Welcome back</Text>

				<Input
					placeholder="Phone Number"
					keyboardType="number-pad"
					style={{ ...styles.input, marginTop: 33 }}
				/>
				<Input placeholder="Password" secureTextEntry style={styles.input} />
				<Button
					onPress={() => navigation.navigate("Root")}
					style={{ borderRadius: 11, marginBottom: 14 }}
				>
					Login
				</Button>
				<Button
					style={{
						borderRadius: 11,
						marginBottom: 14,
						backgroundColor: "transparent",
					}}
					appearance="outline"
				>
					Login with Google
				</Button>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Text style={{ ...styles.smallText, textAlign: "center" }}>
						{"Don't"} have an account?
					</Text>
					<Pressable
						style={{ padding: 0, marginLeft: 3 }}
						onPress={() => navigation.navigate("Register")}
					>
						<Text
							category="s1"
							style={{ ...styles.smallText, color: PRIMARY_COLOR }}
						>
							Register
						</Text>
					</Pressable>
				</View>
			</View>
		</ContainerLayout>
	);
};

export default LoginScreen;
