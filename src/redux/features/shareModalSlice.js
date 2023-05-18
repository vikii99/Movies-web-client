import { createSlice } from "@reduxjs/toolkit";

export const shareModalSlice = createSlice({
  name: "ShareModal",
  initialState: {
    shareModalOpen: false,
    link: ""
  },
  reducers: {
    setShareModalOpen: (state, action) => {
      state.shareModalOpen = action.payload;
    },
    setLink: (state, action) => {
        state.link = action.payload;
    }
  },
});

export const { setShareModalOpen, setLink } = shareModalSlice.actions;

export default shareModalSlice.reducer;
