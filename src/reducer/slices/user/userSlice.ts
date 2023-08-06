import { createSlice } from "@reduxjs/toolkit";

interface UserSliceType {
    name: string;
    gender: string;
    birthday: string;
    phoneNum: string;
    email: string;
    nickname: string;
}

const initialState: UserSliceType = {
    name: "",
    gender: "",
    birthday: "",
    phoneNum: "",
    email: "",
    nickname: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (
            state,
            { payload }: { payload: { type: string; value: UserSliceType } }
        ) => {
            const { value } = payload;
            state.name = value.name;
            state.gender = value.gender;
            state.birthday = value.birthday;
            state.phoneNum = value.phoneNum;
            state.email = value.email;
            state.nickname = value.nickname;
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
