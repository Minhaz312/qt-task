import { Provider } from "react-redux";
import primaryItemsSlice from "./features/primaryItems";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        primaryItemsSlice: primaryItemsSlice,
    },
});

const DataProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
