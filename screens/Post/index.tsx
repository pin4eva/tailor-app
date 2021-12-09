import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ContainerLayout from "../../components/ContainerLayout";
import SinglePost from "../../components/post/SinglePost";
import { TextHeaderLarge, TextRegular } from "../../libs/TextComp";

const PostScreen = () => {
	const dataArray = [1, 2, 3, 4, 5];
	return (
		<ContainerLayout>
			<View style={styles.container}>
				<TextHeaderLarge>My Post</TextHeaderLarge>
				<TextRegular>Manage your posts</TextRegular>
				<FlatList
					style={{ marginTop: 50 }}
					data={dataArray}
					keyExtractor={(item) => item.toString()}
					renderItem={() => <SinglePost />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</ContainerLayout>
	);
};

export default PostScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
	},
});
