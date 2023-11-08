import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedItemState {
  selectedSite: string;
  selectedButton: string;
}

const initialState: SelectedItemState = {
  selectedSite: "www.moduo.kr",
  selectedButton: "버튼을 선택해주세요",
};

const SelectedItemInfoSlice = createSlice({
  name: "SelectedItemInfo",
  initialState,
  reducers: {
    setSelectedSite: (state, action: PayloadAction<string>) => {
      state.selectedSite = action.payload;
    },
    setSelectedButton: (state, action: PayloadAction<string>) => {
      state.selectedButton = action.payload;
    },
  },
});

export const { setSelectedSite, setSelectedButton } =
  SelectedItemInfoSlice.actions;
export default SelectedItemInfoSlice.reducer;
