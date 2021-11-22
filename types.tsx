/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
	namespace ReactNavigation {
		type RootParamList = RootStackParamList;
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Modal: undefined;
	NotFound: undefined;
	Login: undefined;
	Register: NavigatorScreenParams<RegisterStackParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RegisterStackScreenProps<
	Screen extends keyof RegisterStackParamList,
> = NativeStackScreenProps<RegisterStackParamList, Screen>;

export type RootTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
	Post: undefined;
	Home: undefined;
	Search: undefined;
	Chat: undefined;
	More: undefined;
};

export type RegisterStackParamList = {
	FirstRegisterScreen: undefined;
	SecondRegisterScreen: undefined;
	VerificationScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
