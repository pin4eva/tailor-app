import React from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import SingleChatListComp from "../../components/chat/SingleChatListComp";
import ContainerLayout from "../../components/ContainerLayout";
import { TextHeaderLarge, TextRegular } from "../../libs/TextComp";

const ChatScreen = () => {
	const dataArray = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<ContainerLayout>
			<View style={styles.container}>
				<TextHeaderLarge>Chat</TextHeaderLarge>
				<TextRegular>Chat with your customers</TextRegular>

				<TextInput style={styles.input} placeholder="Search Message" />

				<FlatList
					style={styles.chatList}
					data={dataArray}
					keyExtractor={(item) => item.toString()}
					renderItem={() => <SingleChatListComp />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</ContainerLayout>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	input: {
		marginTop: 14,
		backgroundColor: "rgba(238, 78, 52, 0.035)",
		padding: 14,
		borderRadius: 11,
		fontSize: 16,
	},
	chatList: {
		marginTop: 30,
	},
});
