import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import bottomSheetSlice from "./bottomSheet/bottomSheetSlice";
import organizationSlice from "./organization/organizationSlice";
import userSlice from "./user/userSlice";
import qtypeSlice from "./qtype/qtypeSlice";

const rootReducer = (state: any, action: PayloadAction<any>) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload.global.init
                ? { ...state, ...action.payload }
                : { ...state };

        default: {
            const combineReducer = combineReducers({
                bottomSheet: bottomSheetSlice,
                organization: organizationSlice,
                user: userSlice,
                qtype: qtypeSlice
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
