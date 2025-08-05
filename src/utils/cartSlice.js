import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        Items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.Items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.Items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            // state.Items = [];
            // state.Items.length = 0;
            return { Items: [] };
        }
    }
});

export default cartSlice.reducer;
export const { addItems, removeItems, clearCart } = cartSlice.actions;