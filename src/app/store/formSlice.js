import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfos: {
    firstName: '',
    email: '',
    password: '',
  },
  moreInfo: {
    color: '',
    terms: false,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveBasicInfo(state, action) {
      state.basicInfos = action.payload;
    },
    saveMoreInfo(state, action) {
      state.moreInfo = action.payload;
    },
    clear() {
      return initialState;
    },
  },
});
