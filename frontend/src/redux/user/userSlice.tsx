// userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: String;
  email: String;
}
interface UserState {
  data: [];
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  data: [],
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("user", async () => {
  fetch("http://localhost:4000/auth/signin").then((res) => res.json());
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default userSlice.reducer;
