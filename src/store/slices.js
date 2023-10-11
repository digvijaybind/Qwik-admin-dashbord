import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showNoOfOperator: false,
};
const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    showModals(state) {
      state.showModal = !state.showModal;
    },
    showNoOfOperator(state) {
      state.showNoOfOperator = !state.showNoOfOperator;
    },
  },
});

export const { showModals, showNoOfOperator } = operatorSlice.actions;
export default operatorSlice.reducer;
