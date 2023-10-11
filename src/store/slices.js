import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showNoOfOperator: false,
  whatToShow: "home",
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
    setWhatToShow(state, action) {
      state.whatToShow = action.payload;
    },
  },
});

export const { showModals, showNoOfOperator,setWhatToShow } = operatorSlice.actions;
export default operatorSlice.reducer;
