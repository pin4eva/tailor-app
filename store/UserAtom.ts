import { atom } from "recoil";
import { IUser } from "../interface/user.interface";

export const UserAtom = atom({
	key: "UserAtom",
	default: null as unknown as IUser,
});
