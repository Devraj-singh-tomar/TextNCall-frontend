import { UserReducerInitialState } from "@/types/reducerType";
import { User } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserReducerInitialState = {
  user: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",

  initialState,

  reducers: {
    userExist: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },

    userNotExist: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { userExist, userNotExist } = userReducer.actions;
