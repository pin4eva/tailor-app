import { Button, Radio, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import ContainerLayout from "../../components/ContainerLayout";
import { RegisterStackScreenProps } from "../../types";
import { authStyles as styles } from "./styles.register";

const fields = [
	"Fabric vendor",
	"Accessories Vendor",
	"Machine Technician",
	"Laundry Services",
	"Models",
];

const FirstRegisterScreen = ({
	navigation,
}: RegisterStackScreenProps<"SecondRegisterScreen">) => {
	const [selectedField, setSelectedField] = useState("");
	return (
		<ContainerLayout>
			<ContainerLayout>
				<View style={styles.container}>
					<Text style={styles.largeText}>First things first</Text>
					<Text style={styles.smallText}>Choose your role</Text>
					<ScrollView>
						{fields.map((field, i) => (
							<TouchableOpacity
								key={i}
								onPressIn={() => setSelectedField(field)}
								style={{ ...styles.radioWrapper, marginTop: 33 }}
							>
								<Radio checked={selectedField === field} />
								<Text style={styles.radioText}> {field}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>

					<Button
						style={{ borderRadius: 11, marginBottom: 14 }}
						onPress={() => navigation.navigate("SecondRegisterScreen")}
					>
						Proceed
					</Button>
				</View>
			</ContainerLayout>
		</ContainerLayout>
	);
};

export default FirstRegisterScreen;
