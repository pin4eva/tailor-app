import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FontAwesome.font,
					"space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
					poppins: require("../assets/fonts/Poppins-Regular.ttf"),
					poppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
					poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
					poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
					poppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
