import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { setStoredTheme } from '@storage';
import type { RootState } from 'src/redux/store';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
      setStoredTheme(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const themeSelector = (state: RootState) => state.theme.value;
