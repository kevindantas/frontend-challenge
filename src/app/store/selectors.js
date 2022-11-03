import { createSelector } from '@reduxjs/toolkit';

export const formSelector = state => state.form;

export const basicInfoSelector = createSelector(
  formSelector,
  state => state.basicInfos,
);

export const moreInfoSelector = createSelector(
  formSelector,
  state => state.moreInfo,
);
