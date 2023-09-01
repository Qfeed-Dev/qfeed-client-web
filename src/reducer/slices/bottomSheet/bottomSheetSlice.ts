import { createSlice } from "@reduxjs/toolkit";

interface GlobalType {
    type: string;
    visible: number;
    actionDelay: boolean;
    selectedIdx: number | null;
    [index: string]: string | string[] | any;
}

const initialState: GlobalType = {
    type: "primary",
    visible: 0,
    actionDelay: false,
    selectedIdx: null
};

export const bottomSheetSlice = createSlice({
    name: "bottomSheet",
    initialState,
    reducers: {
        initializeDefaultInfo: () => initialState,
        changeVisible: (
            state,
            { payload }: { payload: { type: string; value: number } }
        ) => {
            const { value } = payload;
            state.visible = value;
        },
        changeAction: (
            state,
            {
                payload
            }: {
                payload: {
                    type: string;
                    value: { on: boolean; onDismiss?: Function };
                };
            }
        ) => {
            const { value } = payload;
            state.actionDelay = value.on;
            if (value.onDismiss && typeof value.onDismiss === "function")
                value.onDismiss();
            // if (!state.actionDelay) state.selectedIdx = null;
        },
        changeVisibleType: (
            state,
            { payload }: { payload: { type: string; value: any } }
        ) => {
            const { value } = payload;
            if (value[0]) state.actionDelay = value[0];
            state.visible = value[0];
            state.type = value[1];
            state.selectedIdx = value[2];
            state.qset = value[3];
        }
    }
});

export const {
    initializeDefaultInfo,
    changeVisible,
    changeAction,
    changeVisibleType
} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
