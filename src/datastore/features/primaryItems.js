import { createSlice } from "@reduxjs/toolkit";

const primaryItemsSlice = createSlice({
    name: "primaryItems",
    initialState: {
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: null,
    },
    reducers: {
        addItemList(state, action) {
            const payload = action.payload;
            if (payload === null) {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
            } else {
                state.data = payload;
                state.isSuccess = true;
                state.isLoading = false;
            }
        },
        addNewItem(state, action) {
            const payload = action.payload;
            let oldList =
                state.data === null
                    ? []
                    : JSON.parse(JSON.stringify(state.data));
            console.log(oldList);
            state.data = oldList.unshift(payload);
        },
    },
});

export const { addItemList, addNewItem } = primaryItemsSlice.actions;
export default primaryItemsSlice.reducer;
