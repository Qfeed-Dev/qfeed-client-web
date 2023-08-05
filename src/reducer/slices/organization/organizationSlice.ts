import { createSlice } from "@reduxjs/toolkit";

interface OrganizationSliceType {
    selected: string;
    graduate: string;
}

const initialState: OrganizationSliceType = {
    selected: "대학생",
    graduate: "대학교"
};

export const organizationSlice = createSlice({
    name: "organization",
    initialState,
    reducers: {
        changeOrganization: (
            state,
            { payload }: { payload: { type: string; value: string } }
        ) => {
            const { value } = payload;
            state.selected = value;
        },
        changeGraduate: (
            state,
            { payload }: { payload: { type: string; value: string } }
        ) => {
            const { value } = payload;
            state.graduate = value;
        }
    }
});

export const { changeOrganization, changeGraduate } = organizationSlice.actions;

export default organizationSlice.reducer;
