import { createSlice } from "@reduxjs/toolkit";
import { Qtype } from "src/models/questions";

interface OptionSliceType {
    qtype: Qtype;
}

const initialState: OptionSliceType = {
    qtype: "personal"
};

export const QTypeSlice = createSlice({
    name: "qtype",
    initialState,
    reducers: {
        changeQType: (state, { payload }: { payload: { value: Qtype } }) => {
            const { value } = payload;
            state.qtype = value;
        }
    }
});

export const { changeQType } = QTypeSlice.actions;

export default QTypeSlice.reducer;
