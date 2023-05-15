import {atom} from "recoil";

export const isLoginAtom = atom({
    key: "isLogin",
    default:false,
})

export const tweetsAtom = atom({
    key: "tweets",
    default: [],
})

export const usersAtom = atom({
    key: "users",
    default: [],
});