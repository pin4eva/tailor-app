import { ApolloProvider } from "@apollo/client";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { client } from "./apollo";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { default as theme } from "./theme/theme.json";
export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ApolloProvider client={client}>
				<RecoilRoot>
					<SafeAreaProvider>
						<IconRegistry icons={EvaIconsPack} />
						<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
							<Navigation colorScheme={colorScheme} />
						</ApplicationProvider>
						<StatusBar />
					</SafeAreaProvider>
				</RecoilRoot>
			</ApolloProvider>
		);
	}
}
